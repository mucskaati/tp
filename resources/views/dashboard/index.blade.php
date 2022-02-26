@extends('layouts.main')
@section('title', 'Dashboard')
@section('content')

    <div class="container">
        <header class="w-full box-nav p-0">
            <div class="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row">
                <div class="flex flex-row items-center justify-between p-4">
                    <router-link to="/">
                        <span class="text-lg font-semibold tracking-widest text-gray-900">HC Portal</span>
                    </router-link>

                    <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                            <path class="hidden" fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <!-- nav: open = flex, closed = hidden -->
                <nav class="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 text-gray-900 hover:text-blue-800"
                        href="/">Úvod</a>
                    <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 text-gray-900 hover:text-blue-800"
                        href="/">O nás</a>
                    @if (!loggedUser())
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 text-gray-900 hover:text-blue-800"
                            href="/login">Prihlásenie</a>
                    @endif
                    @if (loggedIsAdmin())
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 text-gray-900 hover:text-blue-800"
                            href="/admin">Admin</a>
                    @endif
                    @if (loggedUser())
                        <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4 text-gray-900 hover:text-blue-800"
                            href="{{ route('logout') }}">Odhlásiť sa</a>
                    @endif
                </nav>
            </div>
        </header>

        <div class="box mt-4">
            <div class="bg-white block sm:flex items-center justify-betweenlg:mt-1.5">
                <div class="flex items-center justify-between w-full">
                    <h1 class="text-xl font-semibold text-gray-900">Všetky kľúče</h1>

                    <form action="#" method="GET">
                        <label for="users-search" class="sr-only">Search</label>
                        <div class="mt-1 relative lg:w-64 xl:w-96">
                            <input type="text" name="email" id="users-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="Vyhľadať v klúčoch">
                        </div>
                    </form>

                    <button type="button" data-modal-toggle="add-user-modal"
                        class="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                        <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Pridať klúč
                    </button>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow overflow-hidden">
                            <table class="table-fixed min-w-full divide-y divide-gray-200 mt-5">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Názov / Autor
                                        </th>
                                        <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase">
                                            Lokácia
                                        </th>
                                        <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase">
                                            Dátum pridania
                                        </th>
                                        <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase">
                                            Stav
                                        </th>
                                        <th scope="col" class="p-4 text-center text-xs font-medium text-gray-500 uppercase">
                                            Akcie
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-4 flex gap-4 items-center whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <a href="/detail"
                                                    class="text-base font-semibold text-cyan-600 hover:text-cyan-700">Správa
                                                    z pohľadnice rok 1903</a>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">Európa</td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">20.5.2021</td>
                                        <td class="p-4 whitespace-nowrap text-center text-green-500">Schválený</td>
                                        <td class="p-4 whitespace-nowrap text-center space-x-2">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                    </path>
                                                    <path fill-rule="evenodd"
                                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button type="button" data-modal-toggle="delete-user-modal"
                                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-4 flex gap-4 items-center whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">Európa</td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">20.5.2021</td>
                                        <td class="p-4 whitespace-nowrap text-center font-normal text-yellow-500">Na
                                            schválenie</td>
                                        <td class="p-4 whitespace-nowrap text-center space-x-2">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                    </path>
                                                    <path fill-rule="evenodd"
                                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button type="button" data-modal-toggle="delete-user-modal"
                                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-4 flex gap-4 items-center whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">Európa</td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">20.5.2021</td>
                                        <td class="p-4 whitespace-nowrap text-center font-normal text-yellow-500">Na zmenu
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center space-x-2">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                    </path>
                                                    <path fill-rule="evenodd"
                                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button type="button" data-modal-toggle="delete-user-modal"
                                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="p-4 flex gap-4 items-center whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">Európa</td>
                                        <td class="p-4 whitespace-nowrap text-center text-gray-700">20.5.2021</td>
                                        <td class="p-4 whitespace-nowrap text-center font-normal text-red-500">Zamietnutý
                                        </td>
                                        <td class="p-4 whitespace-nowrap text-center space-x-2">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                    </path>
                                                    <path fill-rule="evenodd"
                                                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button type="button" data-modal-toggle="delete-user-modal"
                                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Paggination -->
            <div
                class="bg-white sticky flex items-center justify-center w-full bottom-0 right-0 border-t border-gray-200 pt-4">
                <div class="flex items-center mb-4 sm:mb-0">
                    <a href="#"
                        class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#"
                        class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2">
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <span class="text-sm font-normal text-gray-500">Zobrazené <span
                            class="text-gray-900 font-semibold">1-20</span> zo <span
                            class="text-gray-900 font-semibold">100</span></span>
                </div>
            </div>

            <!-- New key popup -->
            <div class="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
                id="add-user-modal" aria-hidden="true">
                <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
                    <div class="bg-white rounded-lg shadow relative">
                        <div class="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 class="text-xl font-semibold">
                                Add new user
                            </h3>
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="add-user-modal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <form action="#">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="text-sm font-medium text-gray-900 block mb-2">First
                                            Name</label>
                                        <input type="text" name="first-name" id="first-name"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="Bonnie" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name" class="text-sm font-medium text-gray-900 block mb-2">Last
                                            Name</label>
                                        <input type="text" name="last-name" id="last-name"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="Green" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="email"
                                            class="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                        <input type="email" name="email" id="email"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="example@company.com" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="phone-number" class="text-sm font-medium text-gray-900 block mb-2">Phone
                                            Number</label>
                                        <input type="number" name="phone-number" id="phone-number"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="e.g. +(12)3456 789" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="department"
                                            class="text-sm font-medium text-gray-900 block mb-2">Department</label>
                                        <input type="text" name="department" id="department"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="Development" required="">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="company"
                                            class="text-sm font-medium text-gray-900 block mb-2">Company</label>
                                        <input type="number" name="company" id="company"
                                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                            placeholder="123456" required="">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="items-center p-6 border-t border-gray-200 rounded-b">
                            <button
                                class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="submit">Add user</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Delete verification -->
            <div class="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
                id="delete-user-modal" aria-hidden="true">
                <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                    <div class="bg-white rounded-lg shadow relative">
                        <div class="flex justify-end p-2">
                            <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="delete-user-modal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="p-6 pt-0 text-center">
                            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this
                                user?</h3>
                            <a href="#"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </a>
                            <a href="#"
                                class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                                data-modal-toggle="delete-user-modal">
                                No, cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <footer class="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 mt-4">
            <ul class="flex items-center flex-wrap mb-6 md:mb-0">
                <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Všeobecné podmienky
                        používania</a></li>
                <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie nastavenia</a>
                </li>
                <li><a href="#" class="text-sm font-normal text-gray-500 hover:underline">Kontakt</a></li>
            </ul>
            <div class="flex sm:justify-center space-x-6">
                <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </footer>

    </div>

@endsection
