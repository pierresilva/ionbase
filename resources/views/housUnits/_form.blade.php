
<div class="form-group">
  <label for="hous_unit_id-field">PADRE</label>


  @if($errors->has("model.hous_unit_id"))
    <div class="invalid-feedback">{{ $errors->first("model.hous_unit_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($housUnit))
@if($errors->any()){{ old('model.name') }}@else{{ $housUnit->name ?? '' }}@endif
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
@if(isset($housUnit))
@if($errors->any()){{ old('model.code') }}@else{{ $housUnit->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contact_first_name-field">NOMBRE DEL CONTACTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.contact_first_name")) is-invalid @else is-valid @endif @endif;
  " id="contact_first_name-field" name="model[contact_first_name]" value="
@if(isset($housUnit))
@if($errors->any()){{ old('model.contact_first_name') }}@else{{ $housUnit->contact_first_name ?? '' }}@endif
@endif" >

  @if($errors->has("model.contact_first_name"))
    <div class="invalid-feedback">{{ $errors->first("model.contact_first_name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contact_last_name-field">APELLIDO DEL CONTACTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.contact_last_name")) is-invalid @else is-valid @endif @endif;
  " id="contact_last_name-field" name="model[contact_last_name]" value="
@if(isset($housUnit))
@if($errors->any()){{ old('model.contact_last_name') }}@else{{ $housUnit->contact_last_name ?? '' }}@endif
@endif" >

  @if($errors->has("model.contact_last_name"))
    <div class="invalid-feedback">{{ $errors->first("model.contact_last_name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contact_phone-field">TELÉFONO DEL CONTACTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.contact_phone")) is-invalid @else is-valid @endif @endif;
  " id="contact_phone-field" name="model[contact_phone]" value="
@if(isset($housUnit))
@if($errors->any()){{ old('model.contact_phone') }}@else{{ $housUnit->contact_phone ?? '' }}@endif
@endif" >

  @if($errors->has("model.contact_phone"))
    <div class="invalid-feedback">{{ $errors->first("model.contact_phone") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contact_email-field">EMAIL DEL CONTACTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.contact_email")) is-invalid @else is-valid @endif @endif;
  " id="contact_email-field" name="model[contact_email]" value="
@if(isset($housUnit))
@if($errors->any()){{ old('model.contact_email') }}@else{{ $housUnit->contact_email ?? '' }}@endif
@endif" >

  @if($errors->has("model.contact_email"))
    <div class="invalid-feedback">{{ $errors->first("model.contact_email") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>








