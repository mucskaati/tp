@extends('layouts.plain')
@section('title', 'Registrácia')
@section('content')

    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div class="w-full p-10 bg-white rounded-lg shadow md:mt-0 sm:max-w-md">
            <h1 class="text-2xl font-bold text-center text-gray-900">Registrácia</h1>
            <form class="mt-8 space-y-6" method="POST" action="{{ route('register') }}">
                {{ csrf_field() }}

                @if (isset($message))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-red">
                            {{ $message }}
                        </div>
                    </div>
                @endif
                <div>
                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Uživateľské meno<span
                            class="text-sm text-red-600">*</span></label>
                    <input type="username" name="username" id="username" placeholder="nickname"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Heslo <span
                            class="text-sm text-red-600">*</span></label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <p class="text-sm text-gray-700"><span class="text-sm text-red-600">*</span> označené polia sú povinné</p>

                <button type="submit"
                    class="w-full py-2 font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700">Zaregistrovať
                    sa</button>

                <div class="flex justify-between">
                    <a href="{{ route('login') }}"
                        class="text-sm font-medium hover:underline text-cyan-600">Prihlásenie</a>
                    <a href="{{ route('dashboard') }}" class="text-sm font-medium text-gray-700 hover:underline">Domov</a>
                </div>
            </form>
        </div>
    </div>

@endsection
