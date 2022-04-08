@extends('layouts.app')
@section('title', 'Edit a nomenclator key state')
@section('content')

    <create-key inline-template v-cloak>
        <div class="mt-4 box">
            <h1 class="mb-5 text-xl font-semibold text-center text-gray-900">Edit a nomenclator key state</h1>
            <form action="{{ route('nomenclator.edit_state', $key['id']) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="grid grid-cols-3 gap-5">
                    <x-form.select name="state" class="col-span-3" label="New state">[
                        {"value":"approved", "label":"approved"},
                        {"value":"deleted", "label":"deleted"}
                        ]</x-form.select>
                    <x-form.textarea name="note" class="col-span-3">Note</x-form.textarea>
                </div>

                <div class="flex items-center justify-end gap-3 mt-5">
                    <a href="{{ route('dashboard') }}" class="btn btn-secondary">Cancel</a>
                    <button type="submit" class="btn btn-primary">Update state</button>
                </div>
            </form>
        </div>
    </create-key>


@endsection
