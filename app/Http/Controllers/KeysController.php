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
        return view('nomenclator.create');
    }

    public function store(StoreKeyRequest $request)
    {
        $va = $request->validated();                    // validated attributes

        $va['keyUsers'] = KeyService::prepareUsersForPost($va['keyUserId'], $va['keyUserName'], $va['keyUserMain']);
        KeyService::unsetFormKeyUsersData($va);

        KeyService::prepareImage($va);

        $va = unsetMissingValues($va);                  // cuz if value == null api still reads it as submitted

        // dd($va);

        $res = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->post($this->api_base_url . '/nomenclatorKeys', $va);

        $keys = $res->json();

        dd($res, $keys, $va);

        return view('nomenclator.create');
    }
}
