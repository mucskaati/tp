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

        if ($request->has('nomenclatorImages')) {
            $va['nomenclatorImages'] = KeyService::prepareImagesForPost($request, $va['structure'], $va['hasInstructions'], $this->api_base_url);
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
}
