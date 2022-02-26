@extends('layouts.main')
@section('title', 'Prihlásenie')
@section('content')

    <div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
        <div class="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-md p-10">
            <h1 class="text-2xl text-center font-bold text-gray-900">Prihlásenie</h1>
            <form class="mt-8 space-y-6" method="post" action="{{ route('login') }}">
                {{ csrf_field() }}

                @if (isset($message))
                    <div class="flex justify-between items-center">
                        <div class="flex items-center text-red">
                            {{ $message }}
                        </div>
                    </div>
                @endif
                <div>
                    <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Prihlasovacie meno</label>
                    <input type="text" name="username" id="email" placeholder="usernick"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <div>
                    <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Heslo</label>
                    <input type="password" name="password" id="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                </div>

                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <!-- <input id="remember" name="remember" type="checkbox" class="h-4 w-4">
                                                                                <label for="remember" class="text-sm font-medium text-gray-700 ml-2">Zapamätať prihlásenie</label> -->
                    </div>
                    <a href="/forgotten-password" class="text-sm font-medium hover:underline text-gray-700">Zabudnuté
                        heslo</a>
                </div>

                <button type="submit"
                    class="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg py-2 w-full text-center">Prihlásenie</button>

                <div class="flex justify-between">
                    <a href="/registration" class="text-sm font-medium hover:underline text-cyan-600">Registrácia</a>
                    <a href="/" class="text-sm font-medium hover:underline text-gray-700">Domov</a>
                </div>
            </form>
        </div>
    </div>

@endsection
