<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    protected $api_base_url;

    public function __construct()
    {
        $this->api_base_url = config('api.api_base_url');
    }

    public function index()
    {
        $response = Http::withBody(
            json_encode([
                'token' => loggedUser()['token'],
            ]),
            'application/json'
        )
            ->accept('application/json')->post($this->api_base_url . '/nomenclatorKeys');
        $keys = $response->json();

        return view('dashboard.index', [
            'keys' => $keys
        ]);
    }
}
