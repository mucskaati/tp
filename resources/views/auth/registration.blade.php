@extends('layouts.plain')
@section('title', 'Registrácia')
@section('content')

    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div class="w-full p-8 bg-white rounded-lg shadow md:mt-0 sm:max-w-sm">
            <h1 class="text-2xl font-bold text-center text-gray-700">Registration</h1>
            <form class="mt-8 space-y-6" method="POST" action="{{ route('register') }}">
                {{ csrf_field() }}

                {{-- @if (isset($message))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-red-500">
                            {{ $message }}
                        </div>
                    </div>
                @endif --}}

                @if (Session::get('success'))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-green-500">
                            {{ Session::get('success') }}
                        </div>
                    </div>
                @elseif (Session::get('error'))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-red-500">
                            {{ Session::get('error') }}
                        </div>
                    </div>
                @endif

                <x-form.input name="username">Username <span class="text-red-500">*</span></x-form.input>
                <x-form.input name="password" type="password">Password <span class="text-red-500">*</span></x-form.input>

                <p class="text-sm text-gray-700"><span class="text-sm text-red-600">*</span> these fields are required</p>

                <button type="submit" class="w-full btn btn-primary">Register</button>

                <div class="flex justify-between">
                    <a href="{{ route('login') }}" class="text-sm font-medium text-blue-500 hover:underline hover:text-blue-600">Login</a>
                    <a href="{{ route('dashboard') }}" class="text-sm font-medium text-gray-700 hover:underline hover:text-gray-800">Home</a>
                </div>
            </form>
        </div>
    </div>

@endsection
