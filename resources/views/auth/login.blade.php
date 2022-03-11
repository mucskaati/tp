@extends('layouts.plain')
@section('title', 'Prihlásenie')
@section('content')

    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <div class="w-full p-10 bg-white rounded-lg shadow md:mt-0 sm:max-w-md">
            <h1 class="text-2xl font-bold text-center text-gray-900">Prihlásenie</h1>
            <form class="mt-8 space-y-6" method="post" action="{{ route('login') }}">
                {{ csrf_field() }}

                @if (isset($message))
                    <div class="flex items-center justify-between">
                        <div class="flex items-center text-red">
                            {{ $message }}
                        </div>
                    </div>
                @endif
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Prihlasovacie meno</label>
                    <input type="text" name="username" id="email" placeholder="usernick"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Heslo</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <!-- <input id="remember" name="remember" type="checkbox" class="w-4 h-4">
                                                                                <label for="remember" class="ml-2 text-sm font-medium text-gray-700">Zapamätať prihlásenie</label> -->
                    </div>
                    <a href="/forgotten-password" class="text-sm font-medium text-gray-700 hover:underline">Zabudnuté
                        heslo</a>
                </div>

                <button type="submit"
                    class="w-full py-2 font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700">Prihlásenie</button>

                <div class="flex justify-between">
                    <a href="/registration" class="text-sm font-medium hover:underline text-cyan-600">Registrácia</a>
                    <a href="/" class="text-sm font-medium text-gray-700 hover:underline">Domov</a>
                </div>
            </form>
        </div>
    </div>

@endsection
