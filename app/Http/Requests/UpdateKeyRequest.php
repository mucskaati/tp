<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateKeyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return isUserSubmitter($this->nomenclator);
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'keyUserMain' => $this->keyUserMain ?? [],
            'hasInstructions' => $this->hasInstructions ?? [],
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
            'cipherType' => 'nullable',
            'keyType' => 'string',
            'usedChars' => 'nullable',
            'groupId' => 'nullable|numeric',
            'usedFrom' => 'nullable|date',
            'usedTo' => 'nullable|date',
            'usedAround' => 'nullable',
            'placeOfCreationId' => 'nullable|numeric',
            // 'keyUserId' => 'nullable',
            // 'keyUserName' => 'nullable',
            // 'keyUserMain' => 'nullable',
            'language' => 'required',
            'structure' => 'array',
            'hasInstructions' => 'array',
        ];
    }
}
