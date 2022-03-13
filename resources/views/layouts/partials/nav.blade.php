<nav class="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
    <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
        href="/">Úvod</a>
    <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
        href="/">O nás</a>
    @if (!loggedUser())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="/login">Prihlásenie</a>
    @endif
    @if (loggedIsAdmin())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('admin.dashboard') }}">Admin</a>
    @endif
    @if (loggedUser())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('dashboard.my') }}">Moje pridané kľúče</a>
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('logout') }}">Odhlásiť sa</a>
    @endif
</nav>
