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

        if ($request->has('nomenclatorImage')) {

            $multipart = [];

            foreach ($va as $key => $v) {
                $multipart[] = [
                    'name' => $key,
                    'contents' => $v
                ];
            }

            $images = ['name' => 'images'];
            $image_path = $request->file('nomenclatorImage')->getPathname();
            $image_mime = $request->file('nomenclatorImage')->getmimeType();
            $image_org  = $request->file('nomenclatorImage')->getClientOriginalName();

            $images['contents'] = [
                'name'     => 'nomenclatorImage',
                'filename' => $image_org,
                'Mime-Type' => $image_mime,
                // 'contents' => $request->file('nomenclatorImage')->get(),
                'contents' => file_get_contents($request->file('nomenclatorImage')->getRealPath()),
            ];
            $multipart[] = $images;

            $client = new \GuzzleHttp\Client();
            $response = $client->request('POST', $this->api_base_url . '/nomenclatorKeys', [
                'headers' => [
                    'authorization' => loggedUser()['token']
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


        dd($response->getBody(), $response->json());

        return view('nomenclator.create');
    }
}
