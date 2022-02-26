<?php

use App\Http\Controllers\LoginController;
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
})->middleware('api.logged')->name('dashboard');

Route::get('/login', function () {
    return view('auth.login');
})->middleware('api.guest');

Route::post('/login', [LoginController::class, 'login'])->middleware('api.guest')->name('login');

Route::get('/registration', function () {
    return view('auth.registration');
})->middleware('api.guest')->name('register');

Route::get('/logout', [LoginController::class, 'logout'])->middleware('api.logged')->name('logout');

Route::post('/register', [LoginController::class, 'register'])->middleware('api.guest')->name('register');

Route::get('/reset', function () {
    return view('auth.reset');
});
