@extends('layouts.app')
@section('title', 'Detail')
@section('content')

    <div class="mt-4 box">
        <div class="flex gap-10">
            {{-- images --}}
            <div id="nomenclator-gallery">
                <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                    <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt=""/>
                </a>
                <div class="flex flex-wrap justify-center gap-3 mt-3">
                    <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                        <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt="" class="object-cover w-20 h-20"/>
                    </a>
                    <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                        <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt="" class="object-cover w-20 h-20"/>
                    </a>
                    <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                        <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt="" class="object-cover w-20 h-20"/>
                    </a>
                    <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                        <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt="" class="object-cover w-20 h-20"/>
                    </a>
                    <a href="{{asset('images/nomenclators/post-card.jpeg')}}" target="_blank">
                        <img src="{{asset('images/nomenclators/post-card.jpeg')}}" alt="" class="object-cover w-20 h-20"/>
                    </a>
                </div>
            </div>
            {{-- main informations --}}
            <div class="w-[35rem]">
                <h1 class="mb-10 text-xl font-semibold text-gray-900">Shorthand message on a postcard from 1903</h1>
                <div class="flex gap-5 text-sm text-gray-500 justify-evenly md:gap-10">
                    <ul class="flex flex-col gap-6">
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                  </svg>
                                <span>Language</span>
                            </div>
                            <span class="text-base text-gray-900">English</span>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                  </svg>
                                <span>Place of creation</span>
                            </div>
                            <span class="text-base text-gray-900">Germany</span>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                  </svg>
                                <span>Cipher type</span>
                            </div>
                            <span class="text-base text-gray-900">Nomenclator</span>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                                  </svg>
                                <span>Key type</span>
                            </div>
                            <span class="text-base text-gray-900">ed, d, x</span>
                        </li>
                    </ul>

                    <ul class="flex flex-col gap-6">
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                <span>Dated from</span>
                            </div>
                            <span class="text-base text-gray-900">15.7.1897</span>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                <span>Dated to</span>
                            </div>
                            <span class="text-base text-gray-900">15.7.1897</span>
                        </li>
                        <li>
                            <div class="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                <span>Dated around</span>
                            </div>
                            <span class="text-base text-gray-900">March 1897</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {{-- extended informations --}}
        <div class="grid grid-cols-2 gap-10 mt-10 text-sm text-gray-500">
            <ul class="flex flex-col gap-6">
                <li>
                    <div class="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        <span>Main users</span>
                    </div>
                    <span class="text-base text-gray-900">Amelie Elisabeth, Landgravine of Hessen-Kassel</span>
                </li>
                <li>
                    <div class="flex items-center gap-2 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        <span>Other users</span>
                    </div>
                    <span class="text-base text-gray-900">Günterode, Moritz Otto von nebo Günterode, Hans Heinrich von; Eberstein, Kaspar von; Torstensson, Lennart</span>
                </li>
            </ul>
            <div class="w-full">
                <div class="flex items-center gap-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                    <span>Transcriptions and solutions</span>
                </div>
                <p class="text-base text-gray-900">
                    Dear Maggie, Be sure and remember Saturday night 6.45 WP or not. With best love RRS
                </p>
            </div>
        </div>
    </div>

@endsection
