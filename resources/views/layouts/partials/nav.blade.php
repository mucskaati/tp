<nav class="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
    <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
        href="/">Home</a>
    <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
        href="/">About us</a>
    @if (!loggedUser())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="/login">Login</a>
    @endif
    @if (loggedIsAdmin())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('admin.dashboard') }}">Admin</a>
    @endif
    @if (loggedUser())
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('dashboard.my') }}">My keys</a>
        <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent md:mt-0 md:ml-4 hover:text-blue-800"
            href="{{ route('logout') }}">Logout</a>
    @endif
</nav>
