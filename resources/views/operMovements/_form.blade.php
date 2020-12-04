
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operMovement))
@if($errors->any()){{ old('model.name') }}@else{{ $operMovement->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="date_statr-field">FECHA INICIO</label>


  @if($errors->has("model.date_statr"))
    <div class="invalid-feedback">{{ $errors->first("model.date_statr") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="date_end-field">FECHA FINAL</label>


  @if($errors->has("model.date_end"))
    <div class="invalid-feedback">{{ $errors->first("model.date_end") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="time_start-field">HORA INICIAL</label>


  @if($errors->has("model.time_start"))
    <div class="invalid-feedback">{{ $errors->first("model.time_start") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="time_end-field">HORA FINAL</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.time_end")) is-invalid @else is-valid @endif @endif;
  " id="time_end-field" name="model[time_end]" value="
@if(isset($operMovement))
@if($errors->any()){{ old('model.time_end') }}@else{{ $operMovement->time_end ?? '' }}@endif
@endif" >

  @if($errors->has("model.time_end"))
    <div class="invalid-feedback">{{ $errors->first("model.time_end") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="time_total-field">TIEMPO UTILIZADO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.time_total")) is-invalid @else is-valid @endif @endif;
  " id="time_total-field" name="model[time_total]" value="
@if(isset($operMovement))
@if($errors->any()){{ old('model.time_total') }}@else{{ $operMovement->time_total ?? '' }}@endif
@endif" >

  @if($errors->has("model.time_total"))
    <div class="invalid-feedback">{{ $errors->first("model.time_total") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="photo-field">FOTO DEL AREA INTERVENIDA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.photo")) is-invalid @else is-valid @endif @endif;
  " id="photo-field" name="model[photo]" value="
@if(isset($operMovement))
@if($errors->any()){{ old('model.photo') }}@else{{ $operMovement->photo ?? '' }}@endif
@endif" >

  @if($errors->has("model.photo"))
    <div class="invalid-feedback">{{ $errors->first("model.photo") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="oper_sector_id-field">SECTORES OPERATIVOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.oper_sector_id")) is-invalid @else is-valid @endif @endif
  " id="oper_sector_id-field" name="model[oper_sector_id]">
    <option value=""></option>
  @foreach( $lists["OperSector"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('oper_sector_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operMovement) && $operMovement->oper_sector_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.oper_sector_id"))
    <div class="invalid-feedback">{{ $errors->first("model.oper_sector_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="oper_contractor_id-field">CONTRATISTAS OPERATIVOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.oper_contractor_id")) is-invalid @else is-valid @endif @endif
  " id="oper_contractor_id-field" name="model[oper_contractor_id]">
    <option value=""></option>
  @foreach( $lists["OperContractor"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('oper_contractor_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operMovement) && $operMovement->oper_contractor_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.oper_contractor_id"))
    <div class="invalid-feedback">{{ $errors->first("model.oper_contractor_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




