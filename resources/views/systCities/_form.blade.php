
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($systCity))
@if($errors->any()){{ old('model.name') }}@else{{ $systCity->name ?? '' }}@endif
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
@if(isset($systCity))
@if($errors->any()){{ old('model.code') }}@else{{ $systCity->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="syst_region_id-field">DEPARTAMENTOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.syst_region_id")) is-invalid @else is-valid @endif @endif
  " id="syst_region_id-field" name="model[syst_region_id]">
    <option value=""></option>
  @foreach( $lists["SystRegion"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('syst_region_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($systCity) && $systCity->syst_region_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.syst_region_id"))
    <div class="invalid-feedback">{{ $errors->first("model.syst_region_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




