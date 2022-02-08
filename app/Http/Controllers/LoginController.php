<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class LoginController extends Controller
{
    protected $api_base_url;

    public function __construct()
    {
        $this->api_base_url = config('api.api_base_url');
    }

    public function login(LoginRequest $request)
    {
        $response = Http::post($this->api_base_url . '/login', [
            'username' => $request->username,
            'password' => $request->password,
        ]);

        if ($response->successful()) {
            $user = $response->body();
        }
    }

    public function register(RegisterRequest $request)
    {

        $response = Http::get($this->api_base_url . '/register', [
            'username' => $request->username,
            'password' => $request->password,
        ]);

        if ($response->successful()) {
            $user = $response->body();
        }
    }
}
