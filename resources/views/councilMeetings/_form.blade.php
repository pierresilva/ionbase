
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($councilMeeting))
@if($errors->any()){{ old('model.name') }}@else{{ $councilMeeting->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="description-field">DESCRIPCIÓN</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.description")) is-invalid @else is-valid @endif @endif;
  " id="description-field" name="model[description]" rows="3" >
@if(isset($councilMeeting))
@if($errors->any()){{ old('model.description') }}@else{{ $councilMeeting->description ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.description"))
    <div class="invalid-feedback">{{ $errors->first("model.description") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="date-field">FECHA</label>


  @if($errors->has("model.date"))
    <div class="invalid-feedback">{{ $errors->first("model.date") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="hour-field">HORA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.hour")) is-invalid @else is-valid @endif @endif;
  " id="hour-field" name="model[hour]" value="
@if(isset($councilMeeting))
@if($errors->any()){{ old('model.hour') }}@else{{ $councilMeeting->hour ?? '' }}@endif
@endif" >

  @if($errors->has("model.hour"))
    <div class="invalid-feedback">{{ $errors->first("model.hour") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="place-field">LUGAR</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.place")) is-invalid @else is-valid @endif @endif;
  " id="place-field" name="model[place]" value="
@if(isset($councilMeeting))
@if($errors->any()){{ old('model.place') }}@else{{ $councilMeeting->place ?? '' }}@endif
@endif" >

  @if($errors->has("model.place"))
    <div class="invalid-feedback">{{ $errors->first("model.place") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="url-field">DIRECCIÓN REUNIÓN VIRTUAL</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.url")) is-invalid @else is-valid @endif @endif;
  " id="url-field" name="model[url]" value="
@if(isset($councilMeeting))
@if($errors->any()){{ old('model.url') }}@else{{ $councilMeeting->url ?? '' }}@endif
@endif" >

  @if($errors->has("model.url"))
    <div class="invalid-feedback">{{ $errors->first("model.url") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>








