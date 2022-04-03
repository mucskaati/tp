@extends('layouts.admin')
@section('title', 'Admin')
@section('content')

    <div class="container">
        <div class="mt-4 box">
            <div class="bg-white block sm:flex items-center justify-betweenlg:mt-1.5">
                <div class="flex items-center justify-between w-full">
                    <h1 class="text-xl font-semibold text-gray-900">All keys</h1>
                    <a href="{{ route('nomenclator.create') }}"
                        class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 sm:w-auto">
                        <svg class="w-6 h-6 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        Add a key
                    </a>
                </div>
            </div>
            <div class="flex flex-col mt-5">
                <div class="">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden shadow">
                            <div class="datatableFixHead">
                                <table class="min-w-full mt-5 divide-y divide-gray-200 table-fixed" id="indexTable">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                                Name / Author
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                                Language
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        @foreach ($keys as $key)

                                            <tr class="hover:bg-gray-100">
                                                <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                                    {{-- doplnit default img --}}
                                                    @if (isset($key['images']))
                                                        <img src="{{ count($key['images']) ? "{$key['images'][0]['url']}" : 'https://cryptograms.hcportal.eu/api/uploads/27691600850778.png' }}"
                                                            alt="thumb" class="w-10 h-10 rounded-full">
                                                    @endif
                                                    <div class="text-sm font-normal text-gray-500">
                                                        <a href="{{ route('nomenclator.show', $key['id']) }}"
                                                            class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                            {{ $key['signature'] }}
                                                        </a>
                                                        <div class="text-sm font-normal text-gray-500">
                                                            {{ $key['mainUsersString'] }}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-4 text-center text-gray-700 whitespace-nowrap"
                                                    data-search="{{ Str::ascii($key['language']) }}">
                                                    {{ $key['language'] }}</td>
                                                <td class="p-4 text-center text-gray-700 whitespace-nowrap">
                                                    {{ $key['date'] }}
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                {{-- <div class="datatableFixHead">
                                    <table class="min-w-full mt-5 divide-y divide-gray-200 table-fixed">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th scope="col" class="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                            Názov / Autor
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                            Lokácia
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                            Dátum pridania
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                            Stav
                                        </th>
                                        <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                            Akcie
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr class="hover:bg-gray-100">
                                        <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <a href="/detail"
                                                    class="text-base font-semibold text-cyan-600 hover:text-cyan-700">Správa
                                                    z pohľadnice rok 1903</a>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">Európa</td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">20.5.2021</td>
                                        <td class="p-4 text-center text-green-500 whitespace-nowrap">Schválený</td>
                                        <td class="p-4 space-x-2 text-center whitespace-nowrap">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200">
                                                Zobraziť
                                            </button>

                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">Európa</td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">20.5.2021</td>
                                        <td class="p-4 font-normal text-center text-yellow-500 whitespace-nowrap">Na
                                            schválenie</td>
                                        <td class="p-4 space-x-2 text-center whitespace-nowrap">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200">
                                                Zobraziť
                                            </button>

                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">Európa</td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">20.5.2021</td>
                                        <td class="p-4 font-normal text-center text-yellow-500 whitespace-nowrap">Na zmenu
                                        </td>
                                        <td class="p-4 space-x-2 text-center whitespace-nowrap">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200">
                                                Zobraziť
                                            </button>

                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-100">
                                        <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                            <img src="https://cryptograms.hcportal.eu/api/uploads/27691600850778.png" alt=""
                                                class="w-10 h-10 rounded-full">
                                            <div class="text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-cyan-600 hover:text-cyan-700">
                                                    Správa z pohľadnice rok 1903</div>
                                                <div class="text-sm font-normal text-gray-500">jankomrkvicka@gmail.com</div>
                                            </div>
                                        </td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">Európa</td>
                                        <td class="p-4 text-center text-gray-700 whitespace-nowrap">20.5.2021</td>
                                        <td class="p-4 font-normal text-center text-red-500 whitespace-nowrap">Zamietnutý
                                        </td>
                                        <td class="p-4 space-x-2 text-center whitespace-nowrap">
                                            <button type="button" data-modal-toggle="user-modal"
                                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200">
                                                Zobraziť
                                            </button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <!-- Paggination -->
                    {{-- <div
                class="sticky bottom-0 right-0 flex items-center justify-center w-full pt-4 bg-white border-t border-gray-200">
                <div class="flex items-center mb-4 sm:mb-0">
                    <a href="#"
                        class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#"
                        class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <span class="text-sm font-normal text-gray-500">Zobrazené <span
                            class="font-semibold text-gray-900">1-20</span> zo <span
                            class="font-semibold text-gray-900">100</span></span>
                </div>
            </div> --}}

                    <!-- New key popup -->
                    <div class="fixed left-0 right-0 z-50 items-center justify-center hidden overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full"
                        id="add-user-modal" aria-hidden="true">
                        <div class="relative w-full h-full max-w-2xl px-4 md:h-auto">
                            <div class="relative bg-white rounded-lg shadow">
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
                                                <label for="first-name"
                                                    class="block mb-2 text-sm font-medium text-gray-900">First
                                                    Name</label>
                                                <input type="text" name="first-name" id="first-name"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="Bonnie" required="">
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="last-name"
                                                    class="block mb-2 text-sm font-medium text-gray-900">Last
                                                    Name</label>
                                                <input type="text" name="last-name" id="last-name"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="Green" required="">
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="email"
                                                    class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                                <input type="email" name="email" id="email"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="example@company.com" required="">
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="phone-number"
                                                    class="block mb-2 text-sm font-medium text-gray-900">Phone
                                                    Number</label>
                                                <input type="number" name="phone-number" id="phone-number"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="e.g. +(12)3456 789" required="">
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="department"
                                                    class="block mb-2 text-sm font-medium text-gray-900">Department</label>
                                                <input type="text" name="department" id="department"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="Development" required="">
                                            </div>
                                            <div class="col-span-6 sm:col-span-3">
                                                <label for="company"
                                                    class="block mb-2 text-sm font-medium text-gray-900">Company</label>
                                                <input type="number" name="company" id="company"
                                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                                    placeholder="123456" required="">
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

@endsection

@section('bottom-script')
    <script>
        $(document).ready(function() {
            customDatatable('indexTable', 0, [0, 'asc'], null)
        });

    </script>
@endsection
