@extends('layouts.main')
@section('title', 'Registrácia')
@section('content')

<div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
  <div class="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-md p-10">
      <h1 class="text-2xl text-center font-bold text-gray-900">Registrácia</h1>
      <form class="mt-8 space-y-6" action="#">
          <div>
            <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Meno <span class="text-red-600 text-sm">*</span></label>
            <input type="email" name="email" id="email" placeholder="janko@mrkvicka.sk" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
          </div>

          <div>
            <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email <span class="text-red-600 text-sm">*</span></label>
            <input type="email" name="email" id="email" placeholder="janko@mrkvicka.sk" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
          </div>

          <div>
            <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Heslo <span class="text-red-600 text-sm">*</span></label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
          </div>

          <div>
            <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Heslo overenie <span class="text-red-600 text-sm">*</span></label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
          </div>

          <p class="text-gray-700 text-sm"><span class="text-red-600 text-sm">*</span> označené polia sú povinné</p>
          
          <button type="submit" class="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg py-2 w-full text-center">Registrácia</button>
          
          <div class="flex justify-between">
            <a href="/login" class="text-sm font-medium hover:underline text-cyan-600">Prihlásenie</a>
            <a href="/" class="text-sm font-medium hover:underline text-gray-700">Domov</a>
          </div>
      </form>
  </div>
</div>
    
@endsection