@props(['name', 'old', 'label' => '', 'value' => null, 'required' => null])

@php
$options = json_decode($slot);
@endphp

<div class="form-element">
    <label for="{{ $name }}" class="input-label">
        {{ $label }}
        @if ($required)
            <span class="text-red-500">*</span>
        @endif
        <span class="input-label-error">
            @error($name)
                {{ $message }}
            @enderror
        </span>
    </label>
    <select name="{{ $name }}" id="{{ $name }}" value="{{ old($name) ? old($name) : $value }}" class="input @error($name) input-error @enderror">
        @if (gettype($options[0]) == 'string')
            @foreach ($options as $option)
                <option value="{{ $option }}" @if (old($name) ? old($name) == $option : $value == $option) selected @endif>
                    {{ $option }}</option>
            @endforeach
        @else
            @foreach ($options as $option)
                <option value="{{ $option->value }}" @if (old($name) ? old($name) == $option->value : $value == $option->value) selected @endif>
                    {{ $option->label }}</option>
            @endforeach
        @endif
    </select>
</div>
