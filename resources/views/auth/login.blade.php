@extends('layouts.plain')
@section('title', 'Login')
@section('content')

    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div class="w-full p-8 bg-white rounded-lg shadow md:mt-0 sm:max-w-sm">
            <h1 class="text-2xl font-bold text-center text-gray-700">Login</h1>
            <form class="mt-8 space-y-6" method="post" action="{{ route('login') }}">
                {{ csrf_field() }}

                @if (Session::get('error'))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-red-500">
                            {{ Session::get('error') }}
                        </div>
                    </div>
                @endif

                @if (isset($success))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-green-500">
                            {{ $success }}
                        </div>
                    </div>
                @endif

                <x-form.input name="username">Username</x-form.input>
                <x-form.input name="password" type="password">Password</x-form.input>

                <button type="submit" class="w-full btn btn-primary">Login</button>

                <div class="flex justify-between">
                    <a href="/registration" class="text-sm font-medium text-blue-500 hover:underline hover:text-blue-600">Registration</a>
                    <a href="{{ route('dashboard') }}" class="text-sm font-medium text-gray-700 hover:underline hover:text-gray-800">Home</a>
                </div>
            </form>
        </div>
    </div>

@endsection
