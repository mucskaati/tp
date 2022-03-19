<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKeyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'keyUserMain' => (bool) $this->keyUserMain,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'folder' => 'nullable',
            'signature' => 'nullable',
            'completeStructure' => 'required',
            'cipher_type' => 'nullable',
            'keyType' => 'string',
            'group_id' => 'nullable|numeric',
            'used_from' => 'nullable|date',
            'used_to' => 'nullable|date',
            'used_around' => 'nullable',
            'place_of_creation' => 'nullable|numeric',
            'keyUserId' => 'nullable',
            'keyUserName' => 'nullable',
            'keyUserMain' => 'boolean',
            'language' => 'required',
            // images
        ];
    }
}
