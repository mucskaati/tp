@props([
    'state' => true,
    'keys',
    'withUpdatedAt' => false,
])

<div class="overflow-x-scroll datatableFixHead">
    <table class="min-w-full !pt-2 divide-y divide-gray-200 table-fixed" id="indexTable">
        <thead>
            <tr>
                <th scope="col">
                    <div class="flex items-center justify-between text-gray-500 hover:text-gray-700">
                        <span class="text-xs uppercase">Signature</span>
                        <x-heroicon-o-selector class="w-5 h-5" />
                    </div>
                </th>
                <th scope="col">
                    <div class="flex items-center justify-between text-gray-500 hover:text-gray-700">
                        <span class="text-xs uppercase">Language</span>
                        <x-heroicon-o-selector class="w-5 h-5" />
                    </div>
                </th>
                <th scope="col">
                    <div class="flex items-center justify-between text-gray-500 hover:text-gray-700">
                        <span class="text-xs uppercase">Date</span>
                        <x-heroicon-o-selector class="w-5 h-5" />
                    </div>
                </th>
                @if ($state)
                    <th scope="col">
                        <div class="flex items-center justify-between text-gray-500 hover:text-gray-700">
                            <span class="text-xs uppercase">State</span>
                            <x-heroicon-o-selector class="w-5 h-5" />
                        </div>
                    </th>
                @endif
                @if ($withUpdatedAt)
                    <th scope="col">
                        <div class="flex items-center justify-between text-gray-500 hover:text-gray-700">
                            <span class="text-xs uppercase">Updated at</span>
                            <x-heroicon-o-selector class="w-5 h-5" />
                        </div>
                    </th>
                @endif
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            @foreach ($keys as $key)
                <tr class="hover:bg-gray-100">
                    <td class="flex items-center gap-4 p-4 whitespace-nowrap">
                        @if (isset($key['images']))
                            <img src="{{ count($key['images']) ? "{$key['images'][0]['url']}" : asset('images/default-image-small.png') }}"
                                alt="thumbnail"
                                onerror="if (this.src != 'images/default-image-small.png') this.src = 'images/default-image-small.png';"
                                class="w-10 h-10 rounded-full">
                        @endif
                        <a href="{{ route('nomenclator.show', $key['id']) }}"
                            class="text-base font-semibold text-blue-500 hover:text-blue-600 text-ellipsis">
                            {{ $key['signature'] }}
                        </a>
                    </td>
                    <td class="p-4 text-center text-gray-700 whitespace-nowrap"
                        data-search="{{ Str::ascii($key['language']) }}">
                        {{ $key['language'] }}</td>
                    <td class="p-4 text-center text-gray-700 whitespace-nowrap">
                        {{ $key['date'] }}
                    </td>
                    @if ($state)
                        <td
                            class="p-4 text-center {{ getStateColor($key['state']['state'])->text }} whitespace-nowrap">
                            {{ Str::ucfirst($key['state']['state']) }}
                        </td>
                    @endif
                    @if ($withUpdatedAt)
                        <td class="p-4 text-center whitespace-nowrap"
                            data-order="{{ parseDateToYmd($key['state']['updatedAt']) }}">
                            {{ parseDateToJny($key['state']['updatedAt']) }}
                        </td>
                    @endif
                </tr>
            @endforeach
        </tbody>
    </table>
</div>

@section('bottom-script')
    @if ($withUpdatedAt)
        <script>
            $(document).ready(function() {
                customDatatable('indexTable', 0, [4, 'desc'], null)
            });
        </script>
    @else
        <script>
            $(document).ready(function() {
                customDatatable('indexTable', 0, [0, 'asc'], null)
            });
        </script>
    @endif
@endsection
