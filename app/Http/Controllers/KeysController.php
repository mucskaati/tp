<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreKeyRequest;
use App\Http\Requests\UpdateKeyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\KeyService;

class KeysController extends Controller
{
    protected $api_base_url;

    public function __construct()
    {
        $this->api_base_url = config('api.api_base_url');
    }

    public function create()
    {
        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/places');

        $places = $response->json();

        $places = collect($places['items'])->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name']
            ];
        });
        $places->prepend(['value' => null, 'label' => 'Undefined']);

        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/keyUsers');

        $keyUsers = $response->json();

        $keyUsers = collect($keyUsers['items'])->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name']
            ];
        });

        return view('nomenclator.create', [
            'places' => $places,
            'keyUsers' => $keyUsers,
            'keys' => $this->getAllNomenclatorKeys(),
            'archives' => $this->getArchives()
        ]);
    }

    public function store(StoreKeyRequest $request)
    {
        $va = $request->validated();                    // validated attributes


        if (isset($va['keyUserId'])) {
            $va['keyUsers'] = KeyService::prepareUsersForPost($va['keyUserId'], $va['keyUserName'], $va['keyUserMain']);
        }

        if ($request->has('nomenclatorImages')) {
            $va['nomenclatorImages'] = KeyService::prepareImagesForPost($request, $va['structure'], $va['hasInstructions'], $this->api_base_url);
        }

        if ($request->placeOfCreationText) {
            $placeID = $this->createPlace($va['placeOfCreationText']);
            if ($placeID) {
                $va['placeOfCreationId'] =  $placeID;
            }
        }

        //Folders

        if ($va['archive_text']) {
            $va['archive'] =  $va['archive_text'];
        }

        if ($va['fond_text']) {
            $va['fond'] =  $va['fond_text'];
        }

        if ($va['folder_text']) {
            $va['folder'] =  $va['folder_text'];
        }



        KeyService::unsetFormKeyUsersData($va);

        KeyService::prepareImage($va);

        $va = unsetMissingValues($va);                  // cuz if value == null api still reads it as submitted


        $req = Http::acceptJson()->withHeaders([
            'authorization' => loggedUser()['token'],
        ])
            ->accept('application/json');

        $response = $req->post($this->api_base_url . '/nomenclatorKeys', $va);

        // dd($response->json());

        if ($response->successful()) {
            alert()->success('Successfully added key', 'Success');
        } else {
            alert()->error('Error occured', 'Error');
        }

        return redirect()->route('nomenclator.create');
    }

    public function show($nomenclatorID)
    {

        if (loggedUser()) {
            $header = [
                'authorization' => loggedUser()['token']
            ];
        } else {
            $header = [];
        }

        $response = Http::withHeaders($header)
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys/' . $nomenclatorID);

        $key = $response->json();

        if ($response->successful() && $key) {

            return view('nomenclator.show', [
                'key' => $key
            ]);
        }

        alert()->error('Key not found', 'Error');
        return redirect()->route('dashboard');
    }

    public function editState($nomenclatorID)
    {
        if (loggedUser() && loggedIsAdmin()) {
            $header = [
                'authorization' => loggedUser()['token']
            ];
        } else {
            return redirect()->route('dashboard');
        }

        $response = Http::withHeaders($header)
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys/' . $nomenclatorID);

        $key = $response->json();

        if ($response->successful() && $key) {

            return view('nomenclator.edit-state', [
                'key' => $key
            ]);
        }

        alert()->error('Key not found', 'Error');
        return redirect()->route('dashboard');
    }

    public function updateState(Request $r, $nomenclatorID)
    {
        if (loggedUser() && loggedIsAdmin()) {
            $header = [
                'authorization' => loggedUser()['token']
            ];
        } else return redirect()->route('dashboard');

        $va = $r->validate([
            'state' => 'required',
            'note' => 'nullable'
        ]);

        $va = unsetMissingValues($va);

        $req = Http::acceptJson()->withHeaders($header)->accept('application/json');

        $response = $req->post($this->api_base_url . "/nomenclatorKeys/$nomenclatorID/state", $va);
        // dd($va, $response, $response->body());
        if ($response->successful()) {
            alert()->success('Successfully updated state', 'Success');
        } else {
            alert()->error('Error occured', 'Error');
        }

        return redirect()->route('nomenclator.show', $nomenclatorID);
    }

    public function edit($nomenclatorID)
    {
        // dd(session('user'));
        if (!isUserSubmitter($nomenclatorID)) abort(401);
        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/places');

        $places = $response->json();

        $places = collect($places['items'])->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name']
            ];
        });
        $places->prepend(['value' => null, 'label' => 'Undefined']);


        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/keyUsers');

        $keyUsers = $response->json();

        $keyUsers = collect($keyUsers['items'])->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name']
            ];
        });


        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys/' . $nomenclatorID);

        if (!$response->successful()) abort(404);
        $key = $response->json();

        return view('nomenclator.edit', compact('places', 'keyUsers', 'key'));
    }

    public function update(UpdateKeyRequest $request, $nomenclatorID)
    {
        $va = $request->validated();                    // validated attributes

        // if (isset($va['keyUserId'])) {
        //     $va['keyUsers'] = KeyService::prepareUsersForPost($va['keyUserId'], $va['keyUserName'], $va['keyUserMain']);
        // }

        // if ($request->has('nomenclatorImages')) {
        //     $va['nomenclatorImages'] = KeyService::prepareImagesForPost($request, $va['structure'], $va['hasInstructions'], $this->api_base_url);
        // }


        KeyService::unsetFormKeyUsersData($va);

        // KeyService::prepareImage($va);

        $va = unsetMissingValues($va);

        $req = Http::acceptJson()->withHeaders([
            'authorization' => loggedUser()['token'],
        ])
            ->accept('application/json');

        $response = $req->post("$this->api_base_url/nomenclatorKeys/$nomenclatorID", $va);

        // dd($response->json(), $response, $response->successful());

        if ($response->successful()) {
            alert()->success('Successfully edited key', 'Success');
        } else {
            alert()->error('Error occured', 'Error');
        }

        return redirect()->route('nomenclator.show', $nomenclatorID);
    }

    public function editUsers($nomenclatorID)
    {
        if (!isUserSubmitter($nomenclatorID)) abort(401);

        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/keyUsers');

        $keyUsers = $response->json();

        $keyUsers = collect($keyUsers['items'])->map(function ($item) {
            return [
                'value' => $item['id'],
                'label' => $item['name']
            ];
        });


        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys/' . $nomenclatorID);

        if (!$response->successful()) abort(404);
        $key = $response->json();

        return view('nomenclator.edit-users', compact('keyUsers', 'key'));
    }

    public function createPlace($place)
    {
        $req = Http::acceptJson()->withHeaders([
            'authorization' => loggedUser()['token'],
        ])
            ->accept('application/json');

        $response = $req->post($this->api_base_url . '/places', [
            'name' => $place
        ]);

        $placeID = $response->json();

        if ($placeID) {
            return $placeID['id'];
        }

        return null;
    }

    private function getAllNomenclatorKeys()
    {
        $response = Http::accept('application/json')->withHeaders([
            'authorization' => loggedUser()['token'],
        ])->get($this->api_base_url . '/nomenclatorKeys');
        $response = $response->json()['items'];
        $keys = collect([]);

        if ($response) {
            $keys = collect($response)->map(function ($item) {
                return [
                    'value' => $item['groupId'],
                    'label' => $item['signature']
                ];
            });
        }

        $keys->prepend(['value' => null, 'label' => 'Undefined']);

        return $keys;
    }

    private function getArchives()
    {
        $response = Http::accept('application/json')->withHeaders([
            'authorization' => loggedUser()['token'],
        ])->get($this->api_base_url . '/archives?limit=2');
        $response = $response->json();
        $archives = collect([]);
        $archives->push([
            'name' => 'Archiv 1',
            'fonds' => [
                [
                    'name' => 'Fond 1',
                    'folders' => [
                        [
                            'name' => 'Folder 1',
                        ],
                        [
                            'name' => 'Folder 2',
                        ],
                        [
                            'name' => 'Folder 3',
                        ],
                    ],
                ],
                [
                    'name' => 'Fond 2',
                    'folders' => [
                        [
                            'name' => 'Folder 4',
                        ],
                        [
                            'name' => 'Folder 5',
                        ],
                        [
                            'name' => 'Folder 6',
                        ],
                    ],
                ]
            ]
        ]);

        $archives->push([
            'name' => 'Archiv 2',
            'fonds' => [
                [
                    'name' => 'Fond 3',
                    'folders' => [
                        [
                            'name' => 'Folder 7',
                        ],
                        [
                            'name' => 'Folder 8',
                        ],
                        [
                            'name' => 'Folder 9',
                        ],
                    ],
                ],
                [
                    'name' => 'Fond 4',
                    'folders' => [
                        [
                            'name' => 'Folder 10',
                        ],
                        [
                            'name' => 'Folder 11',
                        ],
                        [
                            'name' => 'Folder 12',
                        ],
                    ],
                ]
            ]
        ]);


        if ($response) {
            $archives = collect($response);
        }

        return $archives;
    }

    // private function createFolder($request)
    // {
    //     $req = Http::acceptJson()->withHeaders([
    //         'authorization' => loggedUser()['token'],
    //     ])
    //         ->accept('application/json');

    //     $response = $req->post($this->api_base_url . '/places', [
    //         'name' => $place
    //     ]);

    //     $placeID = $response->json();

    //     if ($placeID) {
    //         return $placeID['id'];
    //     }

    //     return null;
    // }
}
