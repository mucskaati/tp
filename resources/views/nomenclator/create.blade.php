@extends('layouts.app')
@section('title', 'Pridať nomenklatorový klúč')
@section('content')

    <div class="mt-4 box">
        <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Pridať nový kľúč</h1>
        <form action="#" method="POST" class="{{ route('nomenclator.store') }}">
            @csrf

            <div class="grid grid-cols-3 gap-5">
                {{-- <x-form.input name="name" class="col-span-3">Názov</x-form.input> --}}
                
                <x-form.select name="cipher_type" label="Typ šifry">[
                    {"value":"", "label":"Nedefinovaný"},
                    {"value":"nomenclator", "label":"Nomenklator"},
                    {"value":"code", "label":"Kód"},
                    {"value":"???", "label":"Jednoduchá substitúcia"}
                ]</x-form.select>
                <x-form.select name="keyType" label="Typ kľúča">[
                    {"value":"e", "label":"e"},
                    {"value":"ed", "label":"ed"}
                    ]</x-form.select>
                <x-form.select name="language" label="Jazyk">[
                    {"value":"sk", "label":"Slovenský"},
                    {"value":"en", "label":"Anglický"}
                    ]</x-form.select>

                <x-form.input name="used_from" type="date">Používaný od</x-form.input>
                <x-form.input name="used_to" type="date">Používaný do</x-form.input>
                <x-form.input name="used_around">Používaný okolo</x-form.input>

                {{-- <x-form.input name="main_users" class="col-span-3">Hlavní použivateľia</x-form.input>
                <x-form.input name="users" class="col-span-3">Použivatelia</x-form.input> --}}

                <p class="col-span-3">Kym nebude dodana api /key-users vyplnajte iba pole id alebo iba name, nie obe.
                Potom to prerobime na nejaky multiselect. (asi pole selectov)</p>

                <x-form.input name="keyUserId[]">Id používateľa</x-form.input>
                <x-form.input name="keyUserName[]">Meno používateľa</x-form.input>
                <x-form.check name="keyUserMain[]">Je hlavný</x-form.check>
                
                <x-form.input name="folder">Priečinok</x-form.input>
                <x-form.input name="signature">Signatúra</x-form.input>
                <x-form.input name="group_id">Číslo skupiny</x-form.input>

                <x-form.input name="completeStructure" class="col-span-3">Kompletná štruktúra / Spôsob utajenia</x-form.input> {{-- == sposob utajenia --}}
                
                <x-form.input name="used_chars" class="col-span-3">Použité znaky</x-form.input>
                
                <x-form.input name="place_of_creation" class="col-span-3">Miesto vytvorenia</x-form.input>

                <x-form.textarea name="note" class="col-span-3">Poznámka</x-form.textarea>
            </div>

            <div class="flex items-center justify-end gap-3 mt-5">
                <a href="{{ route('dashboard') }}" class="btn btn-secondary">Zrušiť</a>
                <button type="submit" class="btn btn-primary">Pridať kľúč</button>
            </div>
        </form>
    </div>


@endsection
