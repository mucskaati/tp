@extends('layouts.app')
@section('title', 'Edit a nomenclator key')
@section('content')

    <edit-key inline-template v-cloak pre-submitted-key-users="{{ json_encode($key['keyUsers']) }}">
        <div class="container">
            <div class="mt-4 box">
                <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Edit a nomenclator key</h1>
                <form action="{{ route('nomenclator.edit', $key['id']) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    <div class="grid grid-cols-3 gap-5">
                        {{-- <x-form.input name="name" class="col-span-3">Názov</x-form.input> --}}

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

                        <x-form.input name="usedFrom" type="date" value="{{ $key['usedFrom'] ?? '' }}">Used from</x-form.input>
                        <x-form.input name="usedTo" type="date" value="{{ $key['usedTo'] ?? '' }}">Used to</x-form.input>
                        <x-form.input name="usedAround" value="{{ $key['usedAround'] ?? '' }}">Used around</x-form.input>

                        {{-- <x-form.input name="main_users" class="col-span-3">Hlavní použivateľia</x-form.input>
                <x-form.input name="users" class="col-span-3">Použivatelia</x-form.input> --}}
                    </div>
                    <div class="grid grid-cols-4 gap-4 mt-3 mb-3" v-for="(user, index) in keyUsers" :key="index">
                        <x-form.select name="keyUserId[]" label="Choose a key user este nefunguje" value="@{{ user.id }}">
                            {!! $keyUsers->toJSON() !!}
                        </x-form.select>
                        <x-form.input name="keyUserName[]">Or fill the user name</x-form.input>
                        <div class="flex items-center form-element">
                            <label :for="'main' + index" class="input-label">
                                <input :name="'keyUserMain[' + index + ']'" value="1" type="checkbox" id="'main'+index" class="input @error('keyUserMain') input-error @enderror">
                                <span class="ml-2">Is main user?</span>
                                <span class="input-label-error">
                                    @error('keyUserMain')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                        </div>
                        <div class="flex items-center form-element">
                            <button type="submit" @click.prevent="deleteKeyUser(index)" class="btn btn-secondary">Delete
                                user</button>
                        </div>
                    </div>

                    <button type="submit" @click.prevent="addKeyUser" class="mt-3 mb-3 btn btn-primary">Add user</button>
                    <div class="grid grid-cols-3 gap-5">
                        <x-form.input name="folder" value="{{ $key['folder'] ?? '' }}">Folder</x-form.input>
                        <x-form.input name="signature" value="{{ $key['signature'] ?? '' }}">Signature</x-form.input>
                        <x-form.input name="groupId" value="{{ $key['groupId'] ?? '' }}">Group ID</x-form.input>

                        <x-form.input name="completeStructure" class="col-span-3" value="{{ $key['completeStructure'] ?? '' }}">Complete structure
                        </x-form.input> {{-- == sposob utajenia --}}

                        <x-form.input name="usedChars" class="col-span-3" value="{{ $key['usedChars'] ?? '' }}">Used characters</x-form.input>


                        <div class="col-span-3">
                            <x-form.select name="placeOfCreationId" label="Place of creation"
                                value="{{ isset($key['placeOfCreation']) ? ($key['placeOfCreation']['id'] ?? '') : '' }}">
                                {!! $places->toJSON() !!}
                            </x-form.select>
                        </div>
                        <x-form.textarea name="note" class="col-span-3" value="{{ $key['note'] ?? '' }}">Note</x-form.textarea>
                    </div>
                    <div class="grid grid-cols-4 gap-4 mt-3 mb-3" v-for="(image, ind) in images" :key="ind">
                        <x-form.file name="nomenclatorImages[]">Image</x-form.file>
                        <x-form.input name="structure[]">Key structure on image</x-form.input>
                        <div class="flex items-center form-element">
                            <label :for="'hasInstructions' + ind" class="input-label">
                                <input :name="'hasInstructions[' + ind + ']'" value="1" type="checkbox" :id="'hasInstructions' + ind" class="input @error('hasInstructions') input-error @enderror">
                                <span class="ml-2">Has instructions? </span>
                                <span class="input-label-error">
                                    @error('instruct')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                        </div>
                        <div class="flex items-center form-element">
                            <button type="submit" @click.prevent="deleteImage(ind)" class="btn btn-secondary">Delete
                                image</button>
                        </div>
                    </div>
                    {{-- <button type="submit" @click.prevent="addImage" class="mt-3 mb-3 btn btn-primary">Add image</button> --}}

                    <div class="flex items-center justify-end gap-3 mt-5">
                        <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                        <button type="submit" class="btn btn-primary">Update key</button>
                    </div>
                </form>
            </div>
        </div>
    </edit-key>


@endsection
