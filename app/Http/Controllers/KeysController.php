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

        $image_path = $request->file('nomenclatorImage')->getPathname();
        $image_mime = $request->file('nomenclatorImage')->getmimeType();
        $image_org  = $request->file('nomenclatorImage')->getClientOriginalName();

        $va['nomenclatorImages'] =
            [
                'name'     => 'image',
                'filename' => $image_org,
                'Mime-Type' => $image_mime,
                'contents' => $request->file('nomenclatorImage')->get(),
            ];

        dd($va);
        $client = new \GuzzleHttp\Client();
        $response = $client->request('POST', $this->api_base_url . '/nomenclatorKeys', [
            'headers' => [
                'authorization' => loggedUser()['token']
            ],
            'multipart' => $va,
        ]);

        // $res = Http::acceptJson()->attach('attachment', file_get_contents($request->file('nomenclatorImage'), 'nomecnaltor.jpg'))->withHeaders([
        //     'authorization' => loggedUser()['token'],
        // ])
        //     ->accept('application/json');

        // // if ($request->has('nomenclatorImage')) $res = $res->attach('nomenclatorImage', $request->file('nomenclatorImage'), 'nomenclatorImage.jpg');

        // $res->post($this->api_base_url . '/nomenclatorKeys', $va);

        //keys = $res->json();

        dd($response->getBody());


        return view('nomenclator.create');
    }
}
