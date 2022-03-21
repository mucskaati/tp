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
        $response = Http::accept('application/json')->get($this->api_base_url . '/nomenclatorKeys');
        $keys = $response->json();

        // dd($keys);

        return view('dashboard.index', [
            'keys' => $keys
        ]);
    }

    public function myKeys()
    {
        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys');
        $keys = $response->json();

        // dd($keys);

        return view('dashboard.my-keys', [
            'keys' => $keys
        ]);
    }

    public function admin()
    {
        $response = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ])
            ->accept('application/json')->get($this->api_base_url . '/nomenclatorKeys');

        $keys = $response->json();

        // dd($keys);

        return view('admin.index', [
            'keys' => $keys
        ]);
    }

    public function guest()
    {
        $response = Http::accept('application/json')->post($this->api_base_url . '/nomenclatorKeys');
        $keys = $response->json();

        return view('guest.index', [
            'keys' => $keys
        ]);
    }
}
