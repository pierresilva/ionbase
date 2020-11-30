
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($companyContact))
@if($errors->any()){{ old('model.name') }}@else{{ $companyContact->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="phone-field">TELÉFONO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.phone")) is-invalid @else is-valid @endif @endif;
  " id="phone-field" name="model[phone]" value="
@if(isset($companyContact))
@if($errors->any()){{ old('model.phone') }}@else{{ $companyContact->phone ?? '' }}@endif
@endif" required>

  @if($errors->has("model.phone"))
    <div class="invalid-feedback">{{ $errors->first("model.phone") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="email-field">CORREO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.email")) is-invalid @else is-valid @endif @endif;
  " id="email-field" name="model[email]" value="
@if(isset($companyContact))
@if($errors->any()){{ old('model.email') }}@else{{ $companyContact->email ?? '' }}@endif
@endif" >

  @if($errors->has("model.email"))
    <div class="invalid-feedback">{{ $errors->first("model.email") }}</div>
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
        @if( isset($companyContact) && $companyContact->company_id==$list_key )  selected='selected' @endif
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
  <label for="syst_position_id-field">CARGOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.syst_position_id")) is-invalid @else is-valid @endif @endif
  " id="syst_position_id-field" name="model[syst_position_id]">
    <option value=""></option>
  @foreach( $lists["SystPosition"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('syst_position_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($companyContact) && $companyContact->syst_position_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.syst_position_id"))
    <div class="invalid-feedback">{{ $errors->first("model.syst_position_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




