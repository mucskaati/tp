<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreKeyRequest;
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
            'keyUsers' => $keyUsers
        ]);
    }

    public function store(StoreKeyRequest $request)
    {
        $va = $request->validated();                    // validated attributes


        if (isset($va['keyUserId'])) {
            $va['keyUsers'] = KeyService::prepareUsersForPost($va['keyUserId'], $va['keyUserName'], $va['keyUserMain']);
        }

        KeyService::unsetFormKeyUsersData($va);

        KeyService::prepareImage($va);

        $va = unsetMissingValues($va);                  // cuz if value == null api still reads it as submitted


        if ($request->has('nomenclatorImage')) {

            $multipart = [];

            foreach ($va as $key => $v) {
                $multipart[] = [
                    'name' => $key,
                    'contents' => $v
                ];
            }

            dd($va);

            $images = ['name' => 'images'];
            $image_path = $request->file('nomenclatorImage')->getPathname();
            $image_mime = $request->file('nomenclatorImage')->getmimeType();
            $image_org  = $request->file('nomenclatorImage')->getClientOriginalName();

            $images['contents'] = [
                'name'     => 'nomenclatorImage',
                'filename' => $image_org,
                'Mime-Type' => $image_mime,
                // 'contents' => $request->file('nomenclatorImage')->get(),
                'contents' => fopen($request->file('nomenclatorImage')->getRealPath(), 'r'),
            ];
            $multipart[] = $images;

            //dd($multipart);

            $client = new \GuzzleHttp\Client();
            $response = $client->post($this->api_base_url . '/nomenclatorKeys', [
                'headers' => [
                    'authorization' => loggedUser()['token'],
                    'Accept'                => 'application/json',
                    'Content-Type'          => 'multipart/form-data',
                ],
                'multipart' => [$multipart],
            ]);

            dd($va, $multipart);
        } else {
            $req = Http::acceptJson()->withHeaders([
                'authorization' => loggedUser()['token'],
            ])
                ->accept('application/json');

            $response = $req->post($this->api_base_url . '/nomenclatorKeys', $va);
        }

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
}
