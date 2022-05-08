@extends('layouts.app')
@section('title', 'Edit a nomenclator key')
@section('content')

    <edit-key-users inline-template v-cloak :all-key-users="{{ $keyUsers->toJSON() }}" nomenclator-key-id="{{ $key['id'] }}"
        pre-submitted-key-users="{{ json_encode($key['keyUsers']) }}">
        <div class="container">
            <div class="mt-4 box">
                <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Edit users of a nomenclator key {{ $key['signature'] }}</h1>
                    </div>
                    <div class="grid grid-cols-4 gap-4 mt-3 mb-3" v-for="(keyUser, index) in keyUsers" :key="`keyUsers${index}`">
                        <div class="form-element">
                            <label for="keyUserId" class="input-label">
                                Choose a key user <span class="input-label-error">@error('keyUserId')
                                    {{ $message }} @enderror</span>
                            </label>
                            <select name="keyUserId[]" id="keyUserId[]" v-model="keyUser.id"
                                class="input @error('keyUserId') input-error @enderror" :disabled="keyUser.persisted">
                                <option v-for="key in allKeyUsers" :key="`ks${key.value}${index}`" :value="key.value"> {{-- :selected="keyUser.id === key.value" --}}
                                    @{{ key . label }}
                                </option>
                            </select>
                        </div>
                        <div class="form-element">
                            <label for="keyUserName[]" class="input-label">
                                Or fill the user name
                            </label>
                            <input name="keyUserName[]" type="text" class="input" v-model="keyUser.name" :disabled="keyUser.persisted">
                         </div>
                        <div class="flex items-center form-element">
                            <label :for="'main' + index" class="input-label">
                                <input :name="'keyUserMain[' + index + ']'" {{-- value="1" :checked="keyUser.isMainUser" --}}
                                    v-model="keyUser.isMainUser"
                                    type="checkbox" :id="'main'+index"
                                    class="input @error('keyUserMain') input-error @enderror"
                                    :disabled="keyUser.persisted">
                                <span class="ml-2">Is main user?</span>
                                <span class="input-label-error">
                                    @error('keyUserMain')
                                        {{ $message }}
                                    @enderror
                                </span>
                            </label>
                        </div>
                        <div class="flex items-center form-element">
                            <button type="button" @click="storeKeyUser(keyUser)" class="btn btn-success" v-if="!keyUser.persisted">
                                Persist user
                            </button>
                            <button type="submit" @click.prevent="deleteKeyUser(keyUser, index)" class="btn btn-danger" v-if="keyUser.persisted">
                                Delete user
                            </button>
                        </div>
                    </div>

                <button type="submit" @click.prevent="addKeyUser" class="mt-3 mb-3 btn btn-primary">Add user</button>
            

                </div>

            </div>
        </div>
    </edit-key-users>


@endsection
