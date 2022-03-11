@extends('layouts.app')
@section('title', 'Pridať nomenklatorový klúč')
@section('content')

<div class="mt-4 box">
   <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Pridať nový kľúč</h1>
   <form action="#" method="POST" class="">
      @csrf
   
      <div class="grid grid-cols-3 gap-5">
         <x-form.input name="name" class="col-span-3">Názov</x-form.input>
 
         <x-form.select name="cipher_type" label="Typ šifry">[
            {"value":"nomenclator", "label":"Nomenklator"},
            {"value":"code", "label":"Kód"},
            {"value":"???", "label":"Jednoduchá substitúcia"}
         ]</x-form.select>
         <x-form.select name="key_type" label="Typ kľúča">[
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

         <x-form.input name="main_users" class="col-span-3">Hlavný uživateľia</x-form.input>
         <x-form.input name="users" class="col-span-3">Uživatelia</x-form.input>

         <x-form.textarea name="note" class="col-span-3">Poznámka</x-form.textarea>
      </div>
  
      <div class="flex items-center justify-end gap-3 mt-5">
         <a href="{{route('dashboard')}}" class="btn btn-secondary">Zrušiť</a>
         <button type="submit" class="btn btn-primary">Pridať kľúč</button>
      </div>
   </form>
</div>


@endsection
















