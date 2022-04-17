@extends('layouts.app')
@section('title', 'Admin keys')
@section('content')

    <section class="container">
        <div class="mt-4 box">
            {{-- Box Heading --}}
            <div class="bg-white block sm:flex items-center justify-betweenlg:mt-1.5 mb-5">
                <div class="flex items-center justify-between w-full">
                    <h1 class="text-xl font-semibold text-gray-900">Admin all keys</h1>
                    <a href="{{ route('nomenclator.create') }}" class="btn btn-primary">
                        Add a key
                    </a>
                </div>
            </div>

            {{-- Datatables --}}
            <x-datatable-keys :keys="$keys" :state="true" />
        </div>
    </section>

@endsection
