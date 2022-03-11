@props([
    'name',
    'class' => '',
    'placeholder' => '',
    'value' => null,
    'rows' => '3',
])

<div class="form-element {{$class}}">
    <label for="{{$name}}" class="input-label">
       {{$slot}} <span class="input-label-error">@error($name) {{$message}} @enderror</span>
    </label>
    <textarea name="{{$name}}" rows="{{$rows}}" id="{{$name}}" value="{{old($name) ? old($name) : $value}}" placeholder="{{$placeholder}}" class="input @error($name) input-error @enderror"></textarea>
 </div>