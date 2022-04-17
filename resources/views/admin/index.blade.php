@extends('layouts.app')
@section('title', 'Admin')
@section('content')

    <div class="container">
        <div class="mt-4 box">
            {{-- Box Heading --}}
            <div class="bg-white block sm:flex items-center justify-betweenlg:mt-1.5 mb-5">
                <div class="flex items-center justify-between w-full">
                    <h1 class="text-xl font-semibold text-gray-900">All keys</h1>
                    <a href="{{ route('nomenclator.create') }}" class="btn btn-primary">
                        Add a key
                    </a>
                </div>
            </div>

            {{-- Datatables --}}
            <div class="overflow-x-scroll datatableFixHead">
                <table class="min-w-full !pt-2 divide-y divide-gray-200 table-fixed" id="indexTable">
                    <thead>
                        <tr>
                            <th scope="col" class="p-4 !pl-0 text-xs font-medium text-left text-gray-500 uppercase">
                                Signature
                            </th>
                            <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                Language
                            </th>
                            <th scope="col" class="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                                Date
                            </th>
                            <th scope="col" class="p-4 !pr-0 text-xs font-medium text-center text-gray-500 uppercase">
                                State
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        @foreach ($keys as $key)
                            <tr class="hover:bg-gray-100">
                                <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                                    @if (isset($key['images']))
                                        <img src="{{ count($key['images']) ? "{$key['images'][0]['url']}" : asset('images/default-image-small.png') }}" alt="thumbnail" onerror="if (this.src != 'images/default-image-small.png') this.src = 'images/default-image-small.png';" class="w-10 h-10 rounded-full">
                                    @endif
                                    <a href="{{ route('nomenclator.show', $key['id']) }}" class="text-base font-semibold text-blue-500 hover:text-blue-600 text-ellipsis">
                                        {{ $key['signature'] }}
                                    </a>
                                </td>
                                <td class="p-4 text-center text-gray-700 whitespace-nowrap" data-search="{{ Str::ascii($key['language']) }}">
                                    {{ $key['language'] }}</td>
                                <td class="p-4 text-center text-gray-700 whitespace-nowrap">
                                    {{ $key['date'] }}
                                </td>
                                <td class="p-4 text-center {{ getStateColor($key['state']['state']) }} whitespace-nowrap">
                                    {{ Str::ucfirst($key['state']['state']) }}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

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
