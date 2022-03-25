@props(['name', 'class' => '', 'placeholder' => '', 'value' => false, 'type' => 'checkbox'])

<div class="form-element {{ $class }}">
    <label for="{{ $name }}" class="input-label">
        {{ $slot }} <span class="input-label-error">@error($name) {{ $message }} @enderror</span>
    </label>
    <input name="{{ $name }}" value="{{ $value }}" type="{{ $type }}" id="{{ $name }}"
        placeholder="{{ $placeholder }}" class="input @error($name) input-error @enderror">
</div>
