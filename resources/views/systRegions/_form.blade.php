
<div class="form-group">
  <label for="name-field">NAME</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($systRegion))
@if($errors->any()){{ old('model.name') }}@else{{ $systRegion->name ?? '' }}@endif
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
@if(isset($systRegion))
@if($errors->any()){{ old('model.code') }}@else{{ $systRegion->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="syst_country_id-field">PAISES</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.syst_country_id")) is-invalid @else is-valid @endif @endif
  " id="syst_country_id-field" name="model[syst_country_id]">
    <option value=""></option>
  @foreach( $lists["SystCountry"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('syst_country_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($systRegion) && $systRegion->syst_country_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.syst_country_id"))
    <div class="invalid-feedback">{{ $errors->first("model.syst_country_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




