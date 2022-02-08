<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard.index');
});

Route::get('/login', function () {
    return view('auth.login');
});

Route::post('/login', [LoginController::class, 'login'])->name('login');

Route::get('/registration', function () {
    return view('auth.registration');
});

Route::post('/register', [LoginController::class, 'register'])->name('register');

Route::get('/reset', function () {
    return view('auth.reset');
});
