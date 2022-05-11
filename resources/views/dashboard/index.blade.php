@extends('layouts.app')
@section('title', 'Home')
@section('content')

    {{-- Hero --}}
    <section class="relative bg-center bg-no-repeat bg-cover" style="background-image: url({{ asset('images/hero.jpg') }}); box-shadow: inset 0 0 0 2000px #3089ffCC;">
        <div class="container relative flex justify-center pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-52 lg:pb-44">
            <div class="text-center text-white">
                <h1 class="mb-4 text-xl leading-snug tracking-wider md:mb-8 sm:text-2xl md:text-3xl lg:text-4xl">HC Portal database of cryptograms</h1>
                <p class="max-w-sm mx-auto mb-6 text-sm lg:max-w-md md:mb-8 sm:text-base md:text-lg">The Portal of Historical Ciphers (HCPortal) is a gateway to the world of historical ciphers. You can find a comprehensive database of cryptograms, useful tools and many more..</p>
            </div>
        </div>
    </section>

    <section id="stats" class="mt-10 md:mt-20">
        <div class="container">
            <div class="grid gap-5 text-gray-500 md:gap-10 md:grid-cols-2 lg:grid-cols-6">
                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md md:col-span-2 lg:col-span-2 hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-database class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 54 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Nomenclator keys</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Our complete database contains {{ 54 }} nomenclator keys.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md lg:col-span-2 hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-translate class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 10 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Languages</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Nomenclator keys are devided into {{ 10 }} languages.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md lg:col-span-2 hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-collection class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 20 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Archives</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Nomenclator keys are devided into {{ 20 }} archives.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md lg:col-span-3 hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-calendar class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ '10.5.2022' }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Newest key</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Newest nomenclator key is dated from {{ '10.5.2022' }}.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md lg:col-span-3 hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-calendar class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ '1.1.1978' }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Oldest key</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Oldes nomenclator key is dated from {{ '1.1.1978' }}.</p>
                </div>
            </div>
        </div>
    </section>

    {{-- Table of new keys --}}
    <section id="new-keys-table" class="mt-10 md:mt-20">
        <div class="container">
            <div class="box">
                {{-- Box Heading --}}
                <div class="bg-white block sm:flex items-center justify-betweenlg:mt-1.5 mb-5">
                    <div class="flex items-center justify-between w-full">
                        <h1 class="text-xl font-semibold text-gray-900">All nomenclator keys</h1>
                    </div>
                </div>

                {{-- Datatables --}}
                <x-datatable-keys :keys="$keys" :state="false" />
            </div>
        </div>
    </section>
@endsection
