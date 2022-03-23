<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href="{{ asset('css/app.css?v=') . time() }}" rel="stylesheet">
    {{-- <link href="{{ asset('fontawesome/css/all.min.css') }}" rel="stylesheet">
  <link href="{{ asset('fontawesome/css/fontawesome.min.css') }}" rel="stylesheet"> --}}
    <title>@yield('title')</title>
</head>

<body class="container bg-gray-100">

    {{-- header --}}

    <header class="w-full p-0 box-nav">
        <div class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
            <div class="flex flex-row items-center justify-between p-4">
                <router-link to="/">
                    <span class="text-lg font-semibold tracking-widest text-gray-900">HC Portal Administration</span>
                </router-link>

                <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                        <path class="hidden" fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>

            @include('layouts.partials.nav')
        </div>
    </header>


    @yield('content')

    {{-- footer --}}
    <footer class="p-4 mt-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
        <ul class="flex flex-wrap items-center mb-6 md:mb-0">
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">General conditions of use</a></li>
            <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">Cookie settings</a>
            </li>
            <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
        </ul>
        <div class="flex space-x-6 sm:justify-center">
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-900">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </footer>

    {{-- scripts --}}
    <script src="{{ asset('js/main.js?v=') . time() }}"></script>
</body>

</html>
