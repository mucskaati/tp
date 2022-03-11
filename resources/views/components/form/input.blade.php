@props([
    'name',
    'class' => '',
    'placeholder' => '',
    'value' => null,
    'type' => 'text',
])

<div class="form-element {{$class}}">
    <label for="{{$name}}" class="input-label">
       {{$slot}} <span class="input-label-error">@error($name) {{$message}} @enderror</span>
    </label>
    <input name="{{$name}}" type="{{$type}}" id="{{$name}}" value="{{old($name) ? old($name) : $value}}" placeholder="{{$placeholder}}" class="input @error($name) input-error @enderror">
 </div>