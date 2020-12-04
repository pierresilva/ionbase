
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($counMeeting))
@if($errors->any()){{ old('model.name') }}@else{{ $counMeeting->name ?? '' }}@endif
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
@if(isset($counMeeting))
@if($errors->any()){{ old('model.description') }}@else{{ $counMeeting->description ?? '' }}@endif
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
@if(isset($counMeeting))
@if($errors->any()){{ old('model.place') }}@else{{ $counMeeting->place ?? '' }}@endif
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
@if(isset($counMeeting))
@if($errors->any()){{ old('model.url') }}@else{{ $counMeeting->url ?? '' }}@endif
@endif" >

  @if($errors->has("model.url"))
    <div class="invalid-feedback">{{ $errors->first("model.url") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="act-field">ACTA</label>


  @if($errors->has("model.act"))
    <div class="invalid-feedback">{{ $errors->first("model.act") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="status-field">ESTADO</label>


  @if($errors->has("model.status"))
    <div class="invalid-feedback">{{ $errors->first("model.status") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="start_content-field">INICIO</label>


  @if($errors->has("model.start_content"))
    <div class="invalid-feedback">{{ $errors->first("model.start_content") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="end_content-field">FINAL</label>


  @if($errors->has("model.end_content"))
    <div class="invalid-feedback">{{ $errors->first("model.end_content") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="consecutive-field">CONSECUTIVO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.consecutive")) is-invalid @else is-valid @endif @endif;
  " id="consecutive-field" name="model[consecutive]" value="
@if(isset($counMeeting))
@if($errors->any()){{ old('model.consecutive') }}@else{{ $counMeeting->consecutive ?? '' }}@endif
@endif" >

  @if($errors->has("model.consecutive"))
    <div class="invalid-feedback">{{ $errors->first("model.consecutive") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="type-field">TIPO</label>


  @if($errors->has("model.type"))
    <div class="invalid-feedback">{{ $errors->first("model.type") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>








