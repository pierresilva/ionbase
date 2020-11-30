
<div class="form-group">
  <label for="name-field">NAME</label>

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
  <label for="password-field">PASSWORD</label>

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








