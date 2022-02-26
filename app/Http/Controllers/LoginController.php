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

        $validatedData = $request->validated();

        $response = Http::accept('application/json')
            ->withBody(
                json_encode([
                    'username' => $validatedData['username'],
                    'password' => $validatedData['password'],
                ]),
                'application/json'
            )->post($this->api_base_url . '/login');


        if ($response->successful()) {
            $token = $response->json();

            //Login
            $this->createLoginSession($token, $validatedData);

            return redirect()->route('dashboard');
        }

        return view('auth.login', [
            'message' => 'Vaše prihlasovacie údaje neboli správne.'
        ]);
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

    public function logout()
    {

        if (loggedUser()) {

            session()->forget(['user']);
            redirect()->route('login');
        }

        return redirect()->back();
    }

    private function createLoginSession($token, $data)
    {
        //Save token data
        session([
            'user' => [
                'username' => $data['username'],
                'token' => $token['token'],
                'expiration' => $token['expiresAt'],
                'isAdmin' => isset($token['isAdmin']) ? $token['isAdmin'] : false
            ]
        ]);
    }
}
