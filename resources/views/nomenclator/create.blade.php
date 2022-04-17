@extends('layouts.app')
@section('title', 'Add new nomenclator key')
@section('content')

    <create-key inline-template v-cloak>
        <div class="container">
            <div class="mt-4 box">
                <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Add new nomenclator key</h1>
                <form action="{{ route('nomenclator.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="grid grid-cols-3 gap-5">
                        {{-- <x-form.input name="name" class="col-span-3">Názov</x-form.input> --}}

                        <x-form.select name="cipherType" label="Cipher Type">[
                            {"value":"", "label":"Undefined"},
                            {"value":"nomenclator", "label":"Nomenclator"},
                            {"value":"code", "label":"Code"},
                            {"value":"???", "label":"Simple substitution"}
                            ]</x-form.select>
                        <x-form.select name="keyType" label="Key type">[
                            {"value":"e", "label":"e"},
                            {"value":"ed", "label":"ed"}
                            ]</x-form.select>
                        <x-form.select name="language" label="Language">[
                            {"value":"sk", "label":"Slovak"},
                            {"value":"en", "label":"English"}
                            ]</x-form.select>

                        <x-form.input name="usedFrom" type="date">Used from</x-form.input>
                        <x-form.input name="usedTo" type="date">Used to</x-form.input>
                        <x-form.input name="usedAround">Used around</x-form.input>

                        {{-- <x-form.input name="main_users" class="col-span-3">Hlavní použivateľia</x-form.input>
                <x-form.input name="users" class="col-span-3">Použivatelia</x-form.input> --}}
                    </div>
                    <div class="grid grid-cols-4 gap-4 mt-3 mb-3" v-for="(user, index) in keyUsers" :key="index">
                        <x-form.select name="keyUserId[]" label="Choose a key user">
                            {!! $keyUsers->toJSON() !!}
                        </x-form.select>
                        <x-form.input name="keyUserName[]">Or fill the user name</x-form.input>
                        <div class="form-element">
                            <label :for="'main' + index" class="input-label">
                                Is main user? <span class="input-label-error">
                                    @error('keyUserMain')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <input :name="'keyUserMain[' + index + ']'" value="1" type="checkbox" id="'main'+index" class="input @error('keyUserMain') input-error @enderror">
                        </div>
                        <div class="flex items-center form-element">
                            <button type="submit" @click.prevent="deleteKeyUser(index)" class="btn btn-secondary">Delete
                                user</button>
                        </div>
                    </div>

                    <button type="submit" @click.prevent="addKeyUser" class="mt-3 mb-3 btn btn-primary">Add user</button>
                    <div class="grid grid-cols-3 gap-5">
                        <x-form.input name="folder">Folder</x-form.input>
                        <x-form.input name="signature">Signature</x-form.input>
                        <x-form.input name="groupId">Group ID</x-form.input>

                        <x-form.input name="completeStructure" class="col-span-3">Complete structure
                        </x-form.input> {{-- == sposob utajenia --}}

                        <x-form.input name="usedChars" class="col-span-3">Used characters</x-form.input>


                        <x-form.select name="placeOfCreationId" label="Place of creation">
                            {!! $places->toJSON() !!}
                        </x-form.select>
                        <x-form.textarea name="note" class="col-span-3">Note</x-form.textarea>
                    </div>
                    <div class="grid grid-cols-4 gap-4 mt-3 mb-3" v-for="(image, ind) in images" :key="ind">
                        <x-form.file name="nomenclatorImages[]">Image</x-form.file>
                        <x-form.input name="structure[]">Key structure on image</x-form.input>
                        <div class="form-element">
                            <label :for="'hasInstructions' + ind" class="input-label">
                                Has instructions? <span class="input-label-error">
                                    @error('instruct')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                            <input :name="'hasInstructions[' + ind + ']'" value="1" type="checkbox" :id="'hasInstructions' + ind" class="input @error('hasInstructions') input-error @enderror">
                        </div>
                        <div class="flex items-center form-element">
                            <button type="submit" @click.prevent="deleteImage(ind)" class="btn btn-secondary">Delete
                                image</button>
                        </div>
                    </div>
                    <button type="submit" @click.prevent="addImage" class="mt-3 mb-3 btn btn-primary">Add image</button>

                    <div class="flex items-center justify-end gap-3 mt-5">
                        <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                        <button type="submit" class="btn btn-primary">Add key</button>
                    </div>
                </form>
            </div>
        </div>
    </create-key>


@endsection
