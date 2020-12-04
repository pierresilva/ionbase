
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($compAddress))
@if($errors->any()){{ old('model.name') }}@else{{ $compAddress->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="address-field">DIRECCIÓN</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.address")) is-invalid @else is-valid @endif @endif;
  " id="address-field" name="model[address]" value="
@if(isset($compAddress))
@if($errors->any()){{ old('model.address') }}@else{{ $compAddress->address ?? '' }}@endif
@endif" required>

  @if($errors->has("model.address"))
    <div class="invalid-feedback">{{ $errors->first("model.address") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="main-field">PRINCIPAL</label>


  @if($errors->has("model.main"))
    <div class="invalid-feedback">{{ $errors->first("model.main") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="company_id-field">EMPRESAS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.company_id")) is-invalid @else is-valid @endif @endif
  " id="company_id-field" name="model[company_id]">
    <option value=""></option>
  @foreach( $lists["Company"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('company_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($compAddress) && $compAddress->company_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.company_id"))
    <div class="invalid-feedback">{{ $errors->first("model.company_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="syst_city_id-field">CIUDADES</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.syst_city_id")) is-invalid @else is-valid @endif @endif
  " id="syst_city_id-field" name="model[syst_city_id]">
    <option value=""></option>
  @foreach( $lists["SystCity"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('syst_city_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($compAddress) && $compAddress->syst_city_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.syst_city_id"))
    <div class="invalid-feedback">{{ $errors->first("model.syst_city_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




