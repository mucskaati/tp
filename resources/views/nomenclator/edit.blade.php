@extends('layouts.app')
@section('title', 'Edit a nomenclator key')
@section('content')

    <div class="container">
        <div class="mt-4 box">
            <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Edit a nomenclator key</h1>
            <form action="{{ route('nomenclator.edit', $key['id']) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-3 gap-5">

                    <x-form.select name="cipherType" label="Cipher Type" value="{{ $key['cipherType'] }}">[
                        {"value":"", "label":"Undefined"},
                        {"value":"nomenclator", "label":"Nomenclator"},
                        {"value":"code", "label":"Code"},
                        {"value":"???", "label":"Simple substitution"}
                        ]</x-form.select>
                    <x-form.select name="keyType" label="Key type" value="{{ $key['keyType'] }}">[
                        {"value":"e", "label":"e"},
                        {"value":"ed", "label":"ed"}
                        ]</x-form.select>
                    <x-form.select name="language" label="Language" value="{{ $key['language'] }}">[
                        {"value":"sk", "label":"Slovak"},
                        {"value":"en", "label":"English"}
                        ]</x-form.select>

                    <x-form.input name="usedFrom" type="date" value="{{ parseDateStrToYmd($key['usedFrom'] ?? '') }}">
                        Used from
                    </x-form.input>
                    <x-form.input name="usedTo" type="date" value="{{ parseDateStrToYmd($key['usedTo'] ?? '') }}">Used to</x-form.input>
                    <x-form.input name="usedAround" value="{{ $key['usedAround'] ?? '' }}">Used around</x-form.input>
                </div>

                <div class="grid grid-cols-3 gap-5">
                    <x-form.input name="folder" value="{{ $key['folder'] ?? '' }}">Folder</x-form.input>
                    <x-form.input name="signature" value="{{ $key['signature'] ?? '' }}">Signature</x-form.input>
                    <x-form.input name="groupId" value="{{ $key['groupId'] ?? '' }}">Group ID</x-form.input>

                    <x-form.input name="completeStructure" class="col-span-3"
                        value="{{ $key['completeStructure'] ?? '' }}">Complete structure
                    </x-form.input> {{-- == sposob utajenia --}}

                    <x-form.input name="usedChars" class="col-span-3" value="{{ $key['usedChars'] ?? '' }}">Used
                        characters</x-form.input>


                    <div class="col-span-3">
                        <x-form.select name="placeOfCreationId" label="Place of creation"
                            value="{{ isset($key['placeOfCreation']) ? $key['placeOfCreation']['id'] ?? '' : '' }}">
                            {!! $places->toJSON() !!}
                        </x-form.select>
                    </div>
                    {{-- <x-form.textarea name="note" class="col-span-3" value="{{ $key['note'] ?? '' }}">Note
                    </x-form.textarea> --}} {{-- ma to tu vobec byt?? --}}
                </div>

                <div class="flex items-center justify-end gap-3 mt-5">
                    <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                    <button type="submit" class="btn btn-primary">Update key</button>
                </div>
            </form>
        </div>
    </div>

@endsection
