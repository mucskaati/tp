<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreKeyRequest;
use Illuminate\Http\Request;

class KeysController extends Controller
{
    public function create()
    {
        return view('nomenclator.create');
    }

    public function store(StoreKeyRequest $request)
    {
        return view('nomenclator.create');
    }
}
