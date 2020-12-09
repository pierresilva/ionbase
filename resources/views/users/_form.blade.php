
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($user))
@if($errors->any()){{ old('model.name') }}@else{{ $user->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="email-field">EMAIL</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.email")) is-invalid @else is-valid @endif @endif;
  " id="email-field" name="model[email]" value="
@if(isset($user))
@if($errors->any()){{ old('model.email') }}@else{{ $user->email ?? '' }}@endif
@endif" required>

  @if($errors->has("model.email"))
    <div class="invalid-feedback">{{ $errors->first("model.email") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="password-field">CONTRASEÑA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.password")) is-invalid @else is-valid @endif @endif;
  " id="password-field" name="model[password]" value="
@if(isset($user))
@if($errors->any()){{ old('model.password') }}@else{{ $user->password ?? '' }}@endif
@endif" required>

  @if($errors->has("model.password"))
    <div class="invalid-feedback">{{ $errors->first("model.password") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="first_name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.first_name")) is-invalid @else is-valid @endif @endif;
  " id="first_name-field" name="model[first_name]" value="
@if(isset($user))
@if($errors->any()){{ old('model.first_name') }}@else{{ $user->first_name ?? '' }}@endif
@endif" >

  @if($errors->has("model.first_name"))
    <div class="invalid-feedback">{{ $errors->first("model.first_name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="last_name-field">APELLIDOS</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.last_name")) is-invalid @else is-valid @endif @endif;
  " id="last_name-field" name="model[last_name]" value="
@if(isset($user))
@if($errors->any()){{ old('model.last_name') }}@else{{ $user->last_name ?? '' }}@endif
@endif" >

  @if($errors->has("model.last_name"))
    <div class="invalid-feedback">{{ $errors->first("model.last_name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="accept_terms_condition-field"></label>


  @if($errors->has("model.accept_terms_condition"))
    <div class="invalid-feedback">{{ $errors->first("model.accept_terms_condition") }}</div>
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
        @if( isset($user) && $user->syst_position_id==$list_key )  selected='selected' @endif
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




