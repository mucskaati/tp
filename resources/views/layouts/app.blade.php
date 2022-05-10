<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <title>HC Portal | @yield('title')</title>

    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @if (loggedUser())
        <script>
            window._api_base_url = {{ Js::from(config('api.api_base_url')) }}
            window._token = {{ Js::from(loggedUser()['token']) }}
        </script>
    @endif
</head>

<body class="min-h-screen bg-gray-100">
    <div id="app">
        {{-- header --}}
        <header>
            <nav class="{{ Route::is('dashboard') ? 'nav-hero' : 'nav' }}" x-data="{ open: false, dropdown: 0 }" x-bind:class="open ? '!fixed' : ''">
                <div class="container relative flex items-center justify-between h-16">
                    <a href="{{ route('dashboard') }}" class="z-[110] flex-grow text-xl font-semibold text-white">HC Portal</a>
                    {{-- Nav mobile login / logout --}}
                    @if (!LoggedUser())
                        <a href="{{ route('login') }}" x-on:click="open = false" class="z-[110] text-white nav:hidden">
                            <x-heroicon-o-user class="w-6 h-6" />
                        </a>
                    @else
                        <a href="{{ route('logout') }}" x-on:click="open = false" class="z-[110] text-white nav:hidden">
                            <x-heroicon-o-logout class="w-6 h-6" />
                        </a>
                    @endif
                    {{-- Nav mobile menu open / close --}}
                    <button class="z-[110] p-3 text-2xl text-white nav:hidden hover:text-white" x-on:click="open = !open">
                        <x-heroicon-o-menu x-show="!open" class="w-8 h-8" />
                        <x-heroicon-o-x x-cloak x-show="open" class="w-8 h-8" />
                    </button>
                    {{-- Nav links --}}
                    <ul class="nav-wrapper" x-bind:class="open ? '!h-screen' : ''">
                        <li><a href="{{ route('dashboard') }}" class="nav-link {{ Route::is('dashboard') ? 'nav-link-active' : null }}" x-on:click="open = false">Home</a></li>
                        @if (LoggedUser())
                            <li><a href="{{ route('dashboard.my') }}" class="nav-link {{ Route::is('dashboard.my') ? 'nav-link-active' : null }}" x-on:click="open = false">My Keys</a></li>
                        @endif
                        @if (loggedIsAdmin())
                            <li><a href="{{ route('admin.dashboard') }}" class="nav-link {{ Route::is('admin.dashboard') ? 'nav-link-active' : null }}" x-on:click="open = false">Admin</a></li>
                        @endif
                        @if (!LoggedUser())
                            <li><a href="{{ route('login') }}" class="nav-link" x-on:click="open = false">Login</a></li>
                        @else
                            <li><a href="{{ route('logout') }}" class="nav-link" x-on:click="open = false">Logout</a></li>
                        @endif
                    </ul>
                </div>
            </nav>
        </header>

        @yield('content')

        {{-- footer --}}
        <div class="container">
            <footer class="p-4 mt-4 bg-white rounded-tl-lg rounded-tr-lg shadow md:p-6">
                <p class="text-center">© Copyright {{ date('Y') }} hcportal.eu</p>
            </footer>
        </div>

    </div>

    {{-- scripts --}}
    <script src="{{ mix('js/app.js') }}"></script>
    @include('sweet::alert')
    @yield('bottom-script')
</body>

</html>
