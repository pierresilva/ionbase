
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($corrPacket))
@if($errors->any()){{ old('model.name') }}@else{{ $corrPacket->name ?? '' }}@endif
@endif" >

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="conveyor-field">TRANPORTADOR</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.conveyor")) is-invalid @else is-valid @endif @endif;
  " id="conveyor-field" name="model[conveyor]" value="
@if(isset($corrPacket))
@if($errors->any()){{ old('model.conveyor') }}@else{{ $corrPacket->conveyor ?? '' }}@endif
@endif" >

  @if($errors->has("model.conveyor"))
    <div class="invalid-feedback">{{ $errors->first("model.conveyor") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="guide_number-field">NÚMERO DE GUIA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.guide_number")) is-invalid @else is-valid @endif @endif;
  " id="guide_number-field" name="model[guide_number]" value="
@if(isset($corrPacket))
@if($errors->any()){{ old('model.guide_number') }}@else{{ $corrPacket->guide_number ?? '' }}@endif
@endif" >

  @if($errors->has("model.guide_number"))
    <div class="invalid-feedback">{{ $errors->first("model.guide_number") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="received_at-field">RECIBIDO</label>


  @if($errors->has("model.received_at"))
    <div class="invalid-feedback">{{ $errors->first("model.received_at") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="received_comment-field">COMENTARIO RECIBIDO</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.received_comment")) is-invalid @else is-valid @endif @endif;
  " id="received_comment-field" name="model[received_comment]" rows="3" >
@if(isset($corrPacket))
@if($errors->any()){{ old('model.received_comment') }}@else{{ $corrPacket->received_comment ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.received_comment"))
    <div class="invalid-feedback">{{ $errors->first("model.received_comment") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="delivered_at-field">ENTREGADO</label>


  @if($errors->has("model.delivered_at"))
    <div class="invalid-feedback">{{ $errors->first("model.delivered_at") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="delivered_to-field">ENTREGADO A</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.delivered_to")) is-invalid @else is-valid @endif @endif;
  " id="delivered_to-field" name="model[delivered_to]" value="
@if(isset($corrPacket))
@if($errors->any()){{ old('model.delivered_to') }}@else{{ $corrPacket->delivered_to ?? '' }}@endif
@endif" >

  @if($errors->has("model.delivered_to"))
    <div class="invalid-feedback">{{ $errors->first("model.delivered_to") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="delivered_signature-field">FIRMA DE ENTREGADO</label>


  @if($errors->has("model.delivered_signature"))
    <div class="invalid-feedback">{{ $errors->first("model.delivered_signature") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="delivered_comment-field">COMENTARIO ENTREGADO</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.delivered_comment")) is-invalid @else is-valid @endif @endif;
  " id="delivered_comment-field" name="model[delivered_comment]" rows="3" >
@if(isset($corrPacket))
@if($errors->any()){{ old('model.delivered_comment') }}@else{{ $corrPacket->delivered_comment ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.delivered_comment"))
    <div class="invalid-feedback">{{ $errors->first("model.delivered_comment") }}</div>
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
  <label for="hous_unit_id-field">UNIDADES HABITACIONALES</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.hous_unit_id")) is-invalid @else is-valid @endif @endif
  " id="hous_unit_id-field" name="model[hous_unit_id]">
    <option value=""></option>
  @foreach( $lists["HousUnit"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('hous_unit_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($corrPacket) && $corrPacket->hous_unit_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.hous_unit_id"))
    <div class="invalid-feedback">{{ $errors->first("model.hous_unit_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




