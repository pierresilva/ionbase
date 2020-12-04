
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.name') }}@else{{ $operContractor->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="document-field">DOCUMENTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.document")) is-invalid @else is-valid @endif @endif;
  " id="document-field" name="model[document]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.document') }}@else{{ $operContractor->document ?? '' }}@endif
@endif" required>

  @if($errors->has("model.document"))
    <div class="invalid-feedback">{{ $errors->first("model.document") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="address-field">DIRECCIÓN</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.address")) is-invalid @else is-valid @endif @endif;
  " id="address-field" name="model[address]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.address') }}@else{{ $operContractor->address ?? '' }}@endif
@endif" >

  @if($errors->has("model.address"))
    <div class="invalid-feedback">{{ $errors->first("model.address") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="phone-field">TELÉFONO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.phone")) is-invalid @else is-valid @endif @endif;
  " id="phone-field" name="model[phone]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.phone') }}@else{{ $operContractor->phone ?? '' }}@endif
@endif" >

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
@if(isset($operContractor))
@if($errors->any()){{ old('model.email') }}@else{{ $operContractor->email ?? '' }}@endif
@endif" >

  @if($errors->has("model.email"))
    <div class="invalid-feedback">{{ $errors->first("model.email") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="phone_support-field">TELÉFONO DE SOPORTE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.phone_support")) is-invalid @else is-valid @endif @endif;
  " id="phone_support-field" name="model[phone_support]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.phone_support') }}@else{{ $operContractor->phone_support ?? '' }}@endif
@endif" >

  @if($errors->has("model.phone_support"))
    <div class="invalid-feedback">{{ $errors->first("model.phone_support") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="email_support-field">CORREO DE SOPORTE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.email_support")) is-invalid @else is-valid @endif @endif;
  " id="email_support-field" name="model[email_support]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.email_support') }}@else{{ $operContractor->email_support ?? '' }}@endif
@endif" >

  @if($errors->has("model.email_support"))
    <div class="invalid-feedback">{{ $errors->first("model.email_support") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contact-field">CONTACTO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.contact")) is-invalid @else is-valid @endif @endif;
  " id="contact-field" name="model[contact]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.contact') }}@else{{ $operContractor->contact ?? '' }}@endif
@endif" >

  @if($errors->has("model.contact"))
    <div class="invalid-feedback">{{ $errors->first("model.contact") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="business_hour-field">HORARIO DE ATENCIÓN</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.business_hour")) is-invalid @else is-valid @endif @endif;
  " id="business_hour-field" name="model[business_hour]" rows="3" >
@if(isset($operContractor))
@if($errors->any()){{ old('model.business_hour') }}@else{{ $operContractor->business_hour ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.business_hour"))
    <div class="invalid-feedback">{{ $errors->first("model.business_hour") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="phone_emergency-field">TELÉFONO DE EMERGENCIA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.phone_emergency")) is-invalid @else is-valid @endif @endif;
  " id="phone_emergency-field" name="model[phone_emergency]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.phone_emergency') }}@else{{ $operContractor->phone_emergency ?? '' }}@endif
@endif" >

  @if($errors->has("model.phone_emergency"))
    <div class="invalid-feedback">{{ $errors->first("model.phone_emergency") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="email_emergency-field">CORREO DE EMERGENCIA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.email_emergency")) is-invalid @else is-valid @endif @endif;
  " id="email_emergency-field" name="model[email_emergency]" value="
@if(isset($operContractor))
@if($errors->any()){{ old('model.email_emergency') }}@else{{ $operContractor->email_emergency ?? '' }}@endif
@endif" >

  @if($errors->has("model.email_emergency"))
    <div class="invalid-feedback">{{ $errors->first("model.email_emergency") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>








