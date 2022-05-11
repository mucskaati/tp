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

    public function loginForm()
    {
        return view('auth.login');
    }

    public function registerForm()
    {
        return view('auth.registration');
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

        return back()->with('error', 'Username or password is incorrect.');
    }

    public function register(RegisterRequest $request)
    {

        $validatedData = $request->validated();

        $response = Http::accept('application/json')
            ->withBody(
                json_encode([
                    'username' => $validatedData['username'],
                    'password' => $validatedData['password'],
                ]),
                'application/json'
            )->post($this->api_base_url . '/register');

        if ($response->successful()) {
            $user = $response->json();

            return view('auth.login', ['success' => 'Registration was successful. You can login now.']);
        }

        return back()->with('error', 'Username is already taken.');
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
                'isAdmin' => isset($token['isAdmin']) ? $token['isAdmin'] : false,
                'id' => isset($token['userId']) ? $token['userId'] : null,
            ]
        ]);
    }
}