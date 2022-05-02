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
            <div class="grid gap-10 text-gray-500 md:grid-cols-2 lg:grid-cols-3">
                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-database class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 54 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Cryptograms</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Our complete database contains {{ 54 }} cryptograms.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-lock-closed class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 10 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">New Cryptograms</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, modi.</p>
                </div>

                <div class="p-5 transition-all bg-white border-b-4 border-blue-400 shadow-md hover:scale-105">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <x-heroicon-o-sparkles class="w-10 h-10 text-blue-400" />
                        <span class="text-2xl font-semibold text-gray-700">{{ 20 }}</span>
                        <h3 class="text-lg text-gray-700 capitalize">Solved Cryptograms</h3>
                    </div>
                    <p class="max-w-md mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, praesentium?</p>
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
                        <h1 class="text-xl font-semibold text-gray-900">Newest nomenclator keys</h1>
                    </div>
                </div>

                {{-- Datatables --}}
                <x-datatable-keys :keys="$keys" :state="false" />
            </div>
        </div>
    </section>
@endsection
