<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreKeyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

        foreach ($va as $vkey => $v) {                  // cuz if value == null api still reads it as submitted
            if (!$v) unset($va[$vkey]);
        }

        $va['keyUsers'] = [['id' => 1]];                // skusam uz hocico len nech sa tam jeden kluc prida dopici

        $res = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->post($this->api_base_url . '/nomenclatorKeys', $va);

        $keys = $res->json();

        dd($res, $keys, $va);

        return view('nomenclator.create');
    }
}
