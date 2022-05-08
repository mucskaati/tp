@extends('layouts.app')
@section('title', 'Key detail - ' . $key['signature'])
@section('content')

    <div class="container">
        <div class="mt-4 box">
            <div class="flex flex-col-reverse gap-10 lg:flex-row">
                {{-- images --}}
                <div id="nomenclator-gallery" class="w-full lg:max-w-xl">
                    @if (isset($key['images']) && count($key['images']) > 0)
                        <a href="{{ $key['images'][0]['url'] ?: asset('images/default-image-large.png') }}" target="_blank">
                            <img src="{{ $key['images'][0]['url'] ?: asset('images/default-image-large.png') }}" class="rounded @if ($key['images'][0]['hasInstructions']) border-[3px] border-blue-500 @endif" alt="{{ $key['signature'] }}" />
                            <span class="pswp-caption-content">Has instructions:
                                {{ $key['images'][0]['hasInstructions'] ? 'Yes' : 'No' }} |
                                {{ $key['images'][0]['structure'] ? 'Image structure: ' . $key['images'][0]['structure'] : 'No image structure' }}</span>
                        </a>
                    @else
                        <img src="{{ asset('images/default-image-large.png') }}" alt="Default image" onerror="if (this.src != 'images/default-image-small.png') this.src = 'images/default-image-small.png';">
                    @endif
                    <div class="flex flex-wrap justify-center gap-3 mt-3">
                        @if (isset($key['images']) && count($key['images']) > 0)
                            @foreach ($key['images'] as $index => $image)
                                @if ($index != 0)
                                    <a href="{{ $image['url'] }}" target="_blank">
                                        {{-- If image contains instrucions add to class list: border-[3px] border-blue-500 --}}
                                        <img src="{{ $image['url'] }}" alt="{{ $key['signature'] }}" class="object-cover w-20 h-20 rounded @if ($image['hasInstructions']) border-[3px] border-blue-500 @endif" />
                                        <span class="pswp-caption-content">Has instructions:
                                            {{ $image['hasInstructions'] ? 'Yes' : 'No' }} |
                                            {{ $image['structure'] ? 'Image structure: ' . $image['structure'] : 'No image structure' }}
                                        </span>
                                    </a>
                                @endif
                            @endforeach
                        @endif
                    </div>
                </div>

                {{-- Main informations --}}
                <div class="w-full">
                    <div class="mb-5">
                        {{-- ADMIN / USER information and actions --}}
                        @if (loggedIsAdmin() || isUserSubmitter($key))
                            <div class="flex items-center justify-between gap-2">
                                {{-- State tag --}}
                                <span class="inline-block px-3 py-1 text-sm text-white {{ getStateColor($key['state']['state'])->bg }} rounded">
                                    State: {{ ucfirst($key['state']['state']) }}
                                </span>
                                {{-- Buttons wrapper right --}}
                                <div class="flex items-center gap-2">
                                    <span class="text-sm font-semibold tracking-wide text-gray-500 uppercase">Edit :</span>
                                    {{-- Edit state button - ADMIN --}}
                                    @if (loggedIsAdmin())
                                        <a href="{{ route('nomenclator.edit_state', $key['id']) }}" class="px-2 py-1.5 btn btn-primary">
                                            State
                                        </a>
                                    @endif
                                    {{-- Edit buttons - USER --}}
                                    @if (isUserSubmitter($key))
                                        <a href="{{ route('nomenclator.edit_users', $key['id']) }}" class="px-2 py-1.5 btn btn-primary">
                                            Users
                                        </a>
                                        <a href="#" class="px-2 py-1.5 btn btn-primary">
                                            Folder
                                        </a>
                                        <a href="{{ route('nomenclator.edit', $key['id']) }}" class="px-2 py-1.5 btn btn-primary">
                                            Key
                                        </a>
                                    @endif
                                </div>
                            </div>
                        @endif

                        @if (loggedIsAdmin() && $key['state']['note'])
                            {{-- Optional state ingo --}}
                            <div class="flex items-center gap-3 p-4 mt-4 bg-white border-b {{ getStateColor($key['state']['state'])->border }} rounded shadow-md">
                                <x-heroicon-o-information-circle class="w-5 h-5 {{ getStateColor($key['state']['state'])->text }}" />
                                <p class="{{ getStateColor($key['state']['state'])->text }}">
                                    {{ $key['state']['note'] }}</p>
                            </div>
                        @endif
                    </div>
                    {{-- Main informations columns --}}
                    <div class="flex gap-5 text-sm text-gray-500 justify-evenly md:gap-10">
                        {{-- First column --}}
                        <ul class="flex flex-col gap-6">
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <x-heroicon-o-identification class="w-4 h-4" />
                                    <span>Signature</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['signature'] ?: 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>Cipher type</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['cipherType'] ?: 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                    </svg>
                                    <span>Key type</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['keyType'] ?: 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span>Complete structure</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['completeStructure'] }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                    <span>Used chars</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['usedChars'] ?: 'Unknown' }}</span>
                            </li>
                            {{-- <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Location</span>
                                </div>
                                <span class="text-base text-blue-400">TODO: Data?</span>
                            </li> --}}
                        </ul>
                        {{-- Second column --}}
                        <ul class="flex flex-col gap-6">
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                    <span>Language</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['language'] }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <span>Place of creation</span>
                                </div>
                                <span class="text-base text-blue-400">{{ isset($key['placeOfCreation']['name']) ? $key['placeOfCreation']['name'] : 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Dated from</span>
                                </div>
                                <span class="text-base text-blue-400">{{ parseDateToJny($key['usedFrom']) ?: 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Dated to</span>
                                </div>
                                <span class="text-base text-blue-400">{{ parseDateToJny($key['usedTo']) ?: 'Unknown' }}</span>
                            </li>
                            <li>
                                <div class="flex items-center gap-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Dated around</span>
                                </div>
                                <span class="text-base text-blue-400">{{ $key['usedAround'] ?: 'Unknown' }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {{-- extended informations --}}
            <ul class="grid grid-cols-1 gap-5 mt-10 text-sm text-gray-500 md:gap-10 md:grid-cols-2">
                <li>
                    <div class="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Main users</span>
                    </div>
                    <span class="text-base text-blue-400">
                        @forelse (collect($key['keyUsers'])->where('isMainUser', true) as $user)
                            {{ $user['name'] }},
                        @empty
                            No main users
                        @endforelse
                    </span>
                </li>
                <li>
                    <div class="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Other users</span>
                    </div>
                    <span class="text-base text-blue-400">
                        @forelse (collect($key['keyUsers'])->where('isMainUser', false) as $user)
                            {{ $user['name'] }},
                        @empty
                            No other users
                        @endforelse
                    </span>
                </li>
            </ul>
        </div>
    </div>

@endsection

@section('bottom-script')
    <script src="{{ mix('js/lightbox.js') }}"></script>
@endsection
