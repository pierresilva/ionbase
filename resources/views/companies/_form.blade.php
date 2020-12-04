
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($company))
@if($errors->any()){{ old('model.name') }}@else{{ $company->name ?? '' }}@endif
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
@if(isset($company))
@if($errors->any()){{ old('model.code') }}@else{{ $company->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="nit-field">NIT</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.nit")) is-invalid @else is-valid @endif @endif;
  " id="nit-field" name="model[nit]" value="
@if(isset($company))
@if($errors->any()){{ old('model.nit') }}@else{{ $company->nit ?? '' }}@endif
@endif" required>

  @if($errors->has("model.nit"))
    <div class="invalid-feedback">{{ $errors->first("model.nit") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="manager_name-field">NOMBRE REPRESENTANTE LEGAL</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.manager_name")) is-invalid @else is-valid @endif @endif;
  " id="manager_name-field" name="model[manager_name]" value="
@if(isset($company))
@if($errors->any()){{ old('model.manager_name') }}@else{{ $company->manager_name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.manager_name"))
    <div class="invalid-feedback">{{ $errors->first("model.manager_name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="manager_document-field">CÉDULA REPRESENTANTE LEGAL</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.manager_document")) is-invalid @else is-valid @endif @endif;
  " id="manager_document-field" name="model[manager_document]" value="
@if(isset($company))
@if($errors->any()){{ old('model.manager_document') }}@else{{ $company->manager_document ?? '' }}@endif
@endif" required>

  @if($errors->has("model.manager_document"))
    <div class="invalid-feedback">{{ $errors->first("model.manager_document") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="logo-field">LOGOTIPO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.logo")) is-invalid @else is-valid @endif @endif;
  " id="logo-field" name="model[logo]" value="
@if(isset($company))
@if($errors->any()){{ old('model.logo') }}@else{{ $company->logo ?? '' }}@endif
@endif" >

  @if($errors->has("model.logo"))
    <div class="invalid-feedback">{{ $errors->first("model.logo") }}</div>
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








