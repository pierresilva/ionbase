
<div class="form-group">
  <label for="name-field">NAME</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operSector))
@if($errors->any()){{ old('model.name') }}@else{{ $operSector->name ?? '' }}@endif
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
@if(isset($operSector))
@if($errors->any()){{ old('model.code') }}@else{{ $operSector->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="housing_unit_id-field">UNIDADES HABITACIONALES</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.housing_unit_id")) is-invalid @else is-valid @endif @endif
  " id="housing_unit_id-field" name="model[housing_unit_id]">
    <option value=""></option>
  @foreach( $lists["HousingUnit"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('housing_unit_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operSector) && $operSector->housing_unit_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.housing_unit_id"))
    <div class="invalid-feedback">{{ $errors->first("model.housing_unit_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




