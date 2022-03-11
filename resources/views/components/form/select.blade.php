@props([
    'name', 'old', 'label' => '',
    'value' => null,
])

@php
    $options = json_decode($slot);
@endphp

<div class="form-element">
    <label for="{{$name}}" class="input-label">
       {{$label}} <span class="input-label-error">@error($name) {{$message}} @enderror</span>
    </label>
    <select name="{{$name}}" id="{{$name}}" value="{{old($name) ? old($name) : $value}}" class="input @error($name) input-error @enderror">
        @foreach ($options as $option)
            <option value="{{$option->value}}" @if(old($name) ? old($name) == $option->value  : $value == $option->value) selected @endif>{{$option->label}}</option>
        @endforeach
    </select>
 </div>