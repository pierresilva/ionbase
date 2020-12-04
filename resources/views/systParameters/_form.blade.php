
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($systParameter))
@if($errors->any()){{ old('model.name') }}@else{{ $systParameter->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="code-field">CÓDIGO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.code")) is-invalid @else is-valid @endif @endif;
  " id="code-field" name="model[code]" value="
@if(isset($systParameter))
@if($errors->any()){{ old('model.code') }}@else{{ $systParameter->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="riched_text-field">TEXTO ENRIQUECIDO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.riched_text")) is-invalid @else is-valid @endif @endif;
  " id="riched_text-field" name="model[riched_text]" value="
@if(isset($systParameter))
@if($errors->any()){{ old('model.riched_text') }}@else{{ $systParameter->riched_text ?? '' }}@endif
@endif" >

  @if($errors->has("model.riched_text"))
    <div class="invalid-feedback">{{ $errors->first("model.riched_text") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="value-field">VALOR</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.value")) is-invalid @else is-valid @endif @endif;
  " id="value-field" name="model[value]" rows="3" required>
@if(isset($systParameter))
@if($errors->any()){{ old('model.value') }}@else{{ $systParameter->value ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.value"))
    <div class="invalid-feedback">{{ $errors->first("model.value") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="syst_parameter_group_id-field">GRUPOS DE PARAMETROS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.syst_parameter_group_id")) is-invalid @else is-valid @endif @endif
  " id="syst_parameter_group_id-field" name="model[syst_parameter_group_id]">
    <option value=""></option>
  @foreach( $lists["SystParameterGroup"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('syst_parameter_group_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($systParameter) && $systParameter->syst_parameter_group_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.syst_parameter_group_id"))
    <div class="invalid-feedback">{{ $errors->first("model.syst_parameter_group_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




