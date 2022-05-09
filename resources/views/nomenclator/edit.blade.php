@extends('layouts.app')
@section('title', 'Edit a nomenclator key')
@section('content')

<edit-key :archives="{{ $archives->toJSON() }}" :nomenclator="{{ json_encode($key) }}" inline-template v-cloak>
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

                    <x-form.input name="usedFrom" type="date" value="{{ parseDateToYmd($key['usedFrom'] ?? '') }}">
                        Used from
                    </x-form.input>
                    <x-form.input name="usedTo" type="date" value="{{ parseDateToYmd($key['usedTo'] ?? '') }}">Used to</x-form.input>
                    <x-form.input name="usedAround" value="{{ $key['usedAround'] ?? '' }}">Used around</x-form.input>
                </div>

                <div class="grid grid-cols-3 gap-5">
                    {{-- <x-form.input name="folder" value="{{ $key['folder'] ?? '' }}">Folder</x-form.input> --}}
                    <x-form.input name="signature" value="{{ $key['signature'] ?? '' }}">Signature</x-form.input>
                    {{-- <x-form.input name="groupId" value="{{ $key['groupId'] ?? '' }}">Group ID</x-form.input> --}}
                    <x-form.select name="groupId" label="Choose a key group" value="{{ $key['groupId'] }}">
                        {!! $keys->toJSON() !!}
                    </x-form.select>

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

                <div class="grid grid-cols-3 gap-5 mt-4">
                    <div class="form-element mb-5">
                        <label for="archive" class="input-label">
                            Choose an archive* <span class="input-label-error">@error('archive')
                                {{ $message }} @enderror</span>
                        </label>
                        <select name="archive" @change="loadFonds($event)" v-model="archive" id="archive"
                            class="input @error('archive') input-error @enderror">
                            <option v-for="archive in archives" :key="archive.shortName" :value="archive.shortName">
                                @{{ archive . shortName }}
                            </option>
                        </select>
                        <x-form.input v-model="archive_text" name="archive_text">Or fill the archive name</x-form.input>
                    </div>
                    <div class="form-element mb-5">

                        <label for="fond" class="input-label">
                            Choose a fond* <span class="input-label-error">@error('fond')
                                {{ $message }} @enderror</span>
                        </label>
                        <select name="fond" @change="loadFolders($event)" v-model="fond" id="fond"
                            class="input @error('fond') input-error @enderror">
                            <option v-for="fond in fonds" :key="fond.name" :value="fond.name">
                                @{{ fond . name }}
                            </option>
                        </select>

                        <x-form.input v-model="fond_text" name="fond_text">Or fill the fond name</x-form.input>
                    </div>
                    <div class="form-element mb-5">

                        <label for="folder" class="input-label">
                            Choose a folder* <span class="input-label-error">@error('folder')
                                {{ $message }} @enderror</span>
                        </label>
                        <select name="folder" v-model="folder" class="input @error('folder') input-error @enderror">
                            <option v-for="folder in folders" :key="folder.name" :value="folder.name">
                                {{-- :selected="keyUser.id === key.value" --}}
                                @{{ folder . name }}
                            </option>
                        </select>
                        <x-form.input v-model="folder_text" name="folder_text">Or fill the folder name</x-form.input>

                    </div>
                </div>

                <div class="flex items-center justify-end gap-3 mt-5">
                    <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                    <button type="submit" class="btn btn-primary">Update key</button>
                </div>
            </form>
        </div>
    </div>
</edit-key>

@endsection
