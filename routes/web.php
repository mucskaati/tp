<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\KeysController;
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



Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/my-keys', [DashboardController::class, 'myKeys'])->middleware('api.logged')->name('dashboard.my');

Route::get('/login', [LoginController::class, 'loginForm'])->middleware('api.guest');
Route::post('/login', [LoginController::class, 'login'])->middleware('api.guest')->name('login');

Route::get('/registration', [LoginController::class, 'registerForm'])->middleware('api.guest')->name('register');
Route::post('/register', [LoginController::class, 'register'])->middleware('api.guest')->name('register');

Route::get('/logout', [LoginController::class, 'logout'])->middleware('api.logged')->name('logout');

Route::get('/reset', function () {
    return view('auth.reset');
});


// Nomenclator keys
Route::get('/nomenclators/create', [KeysController::class, 'create'])->middleware('api.logged')->name('nomenclator.create');
Route::post('/nomenclators/create', [KeysController::class, 'store'])->middleware('api.logged')->name('nomenclator.store');
Route::get('/nomenclators/{nomenclator}', [KeysController::class, 'show'])->name('nomenclator.show');
Route::get('/nomenclators/{nomenclator}/edit', [KeysController::class, 'edit'])->middleware('api.logged')->name('nomenclator.edit');
Route::put('/nomenclators/{nomenclator}/edit', [KeysController::class, 'update'])->middleware('api.logged');
Route::get('/nomenclators/{nomenclator}/edit-state', [KeysController::class, 'editState'])->middleware('api.logged')->name('nomenclator.edit_state');
Route::put('/nomenclators/{nomenclator}/edit-state', [KeysController::class, 'updateState'])->middleware('api.logged');
Route::get('/nomenclators/{nomenclator}/edit-users', [KeysController::class, 'editUsers'])->middleware('api.logged')->name('nomenclator.edit_users');

// Admin
Route::get('/admin', [DashboardController::class, 'admin'])->middleware('api.admin')->name('admin.dashboard');
