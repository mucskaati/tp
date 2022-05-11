@extends('layouts.app')
@section('title', 'Add new nomenclator key')
@section('content')

    <create-key :archives="{{ $archives->toJSON() }}" inline-template v-cloak>
        <div class="container">
            <div class="mt-4 box">
                <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Create new cipher key</h1>
                <form action="{{ route('nomenclator.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {{-- <x-form.input name="name" class="col-span-3">Názov</x-form.input> --}}

                        <x-form.select name="cipherType" label="Cipher Type" required>[
                            {"value":"", "label":"Undefined"},
                            {"value":"nomenclator", "label":"Nomenclator"},
                            {"value":"code", "label":"Code"},
                            {"value":"???", "label":"Simple substitution"}
                            ]</x-form.select>
                        <x-form.select name="keyType" label="Key type" required>[
                            {"value":"e", "label":"e"},
                            {"value":"ed", "label":"ed"}
                            ]</x-form.select>
                        {{-- <x-form.select name="language" label="Language" required>[
                            {"value":"sk", "label":"Slovak"},
                            {"value":"en", "label":"English"}
                            ]</x-form.select> --}}
                        <x-form.input name="language" placeholder="Undefined" required>Language</x-form.input>

                        <x-form.input name="usedFrom" type="date">Used from</x-form.input>
                        <x-form.input name="usedTo" type="date">Used to</x-form.input>
                        <x-form.input name="usedAround">Used around</x-form.input>

                        {{-- <x-form.input name="main_users" class="col-span-3">Hlavní použivateľia</x-form.input>
                <x-form.input name="users" class="col-span-3">Použivatelia</x-form.input> --}}
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-3 mb-3 lg:grid-cols-3" v-for="(user, index) in keyUsers" :key="index">
                        <x-form.select name="keyUserId[]" label="Choose a key user">
                            {!! $keyUsers->toJSON() !!}
                        </x-form.select>
                        <x-form.input name="keyUserName[]">Or fill the user name</x-form.input>
                        <div class="flex items-center justify-between col-span-2 form-element lg:col-span-1">
                            <label :for="'keyUserMain[' + index + ']'" class="input-label">
                                <input :name="'keyUserMain[' + index + ']'" value="1" type="checkbox" id="'main'+index" class="input @error('keyUserMain') input-error @enderror">
                                <span class="ml-2">Is main user?</span>
                                <span class="text-red-500">
                                    @error('keyUserMain')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <button type="submit" @click.prevent="deleteKeyUser(index)" class="btn btn-secondary whitespace-nowrap">Delete user</button>
                        </div>
                    </div>
                    <button type="submit" @click.prevent="addKeyUser" class="mt-3 mb-3 btn btn-primary">Add user</button>

                    <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        <div class="mb-5 form-element">
                            <label for="archive" class="input-label">
                                Choose an archive
                                <span class="text-red-500">*</span>
                                <span class="text-red-500">
                                    @error('archive')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <select name="archive" @change="loadFonds($event)" v-model="archive" id="archive" class="input @error('archive') input-error @enderror">
                                <option v-for="archive in archives" :key="archive.name" :value="archive.name">
                                    {{-- :selected="keyUser.id === key.value" --}}
                                    @{{ archive.shortName }}
                                </option>
                            </select>
                            <x-form.input v-model="archive_text" name="archive_text">Or fill the archive name</x-form.input>
                        </div>
                        <div class="mb-5 form-element">

                            <label for="fond" class="input-label">
                                Choose a fond
                                <span class="text-red-500">*</span>
                                <span class="text-red-500">
                                    @error('fond')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <select name="fond" @change="loadFolders($event)" v-model="fond" id="fond" class="input @error('fond') input-error @enderror">
                                <option v-for="fond in fonds" :key="fond.name" :value="fond.name">
                                    {{-- :selected="keyUser.id === key.value" --}}
                                    @{{ fond.name }}
                                </option>
                            </select>

                            <x-form.input v-model="fond_text" name="fond_text">Or fill the fond name</x-form.input>
                        </div>
                        <div class="mb-5 form-element">

                            <label for="folder" class="input-label">
                                Choose a folder
                                <span class="text-red-500">*</span>
                                <span class="text-red-500">
                                    @error('folder')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <select name="folder" id="folder" class="input @error('folder') input-error @enderror">
                                <option v-for="folder in folders" :key="folder.name" :value="folder.name">
                                    {{-- :selected="keyUser.id === key.value" --}}
                                    @{{ folder.name }}
                                </option>
                            </select>
                            <x-form.input v-model="folder_text" name="folder_text">Or fill the folder name</x-form.input>

                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <x-form.input name="signature">Signature</x-form.input>
                        <x-form.select name="groupId" label="Choose a key group">
                            {!! $keys->toJSON() !!}
                        </x-form.select>

                        <x-form.input name="completeStructure" class="lg:col-span-2" required>Complete structure
                        </x-form.input> {{-- == sposob utajenia --}}

                        <x-form.input name="usedChars" class="lg:col-span-2">Used characters</x-form.input>
                    </div>
                    <div class="grid grid-cols-1 gap-5 mt-3 mb-3 lg:grid-cols-2">
                        <x-form.select name="placeOfCreationId" label="Choose a place of cretion">
                            {!! $places->toJSON() !!}
                        </x-form.select>
                        <x-form.input name="placeOfCreationText">Or fill the place of creation</x-form.input>
                    </div>
                    <x-form.textarea name="note" class="col-span-3">Note</x-form.textarea>
                    <div class="grid grid-cols-2 gap-4 mt-3 mb-3 lg:grid-cols-3" v-for="(image, ind) in images" :key="ind">
                        <x-form.file name="nomenclatorImages[]">Image</x-form.file>
                        <x-form.input name="structure[]">Key structure on image</x-form.input>
                        <div class="flex items-center justify-between col-span-2 form-element lg:col-span-1">
                            <label :for="'hasInstructions' + ind" class="input-label">
                                <input :name="'hasInstructions[' + ind + ']'" value="1" type="checkbox" :id="'hasInstructions' + ind" class="input @error('hasInstructions') input-error @enderror">
                                <span class="ml-2">Has instructions? </span>
                                <span class="text-red-500">
                                    @error('instruct')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>

                            <button type="submit" @click.prevent="deleteImage(ind)" class="btn btn-secondary whitespace-nowrap">Delete image</button>
                        </div>
                    </div>
                    <button type="submit" @click.prevent="addImage" class="mt-3 mb-3 btn btn-primary">Add image</button>

                    <p class="text-sm text-right text-gray-700"><span class="text-sm text-red-600">*</span> these fields are required</p>

                    <div class="flex items-center justify-end gap-3 mt-5">
                        <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                        <button type="submit" class="btn btn-primary">Add key</button>
                    </div>
                </form>
            </div>
        </div>
    </create-key>


@endsection
