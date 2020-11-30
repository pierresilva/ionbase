
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($councilMeetingAgenda))
@if($errors->any()){{ old('model.name') }}@else{{ $councilMeetingAgenda->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="order-field">ORDEN</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.order")) is-invalid @else is-valid @endif @endif;
  " id="order-field" name="model[order]" value="
@if(isset($councilMeetingAgenda))
@if($errors->any()){{ old('model.order') }}@else{{ $councilMeetingAgenda->order ?? '' }}@endif
@endif" >

  @if($errors->has("model.order"))
    <div class="invalid-feedback">{{ $errors->first("model.order") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="council_meeting_id-field">JUNTAS DEL CONSEJO</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.council_meeting_id")) is-invalid @else is-valid @endif @endif
  " id="council_meeting_id-field" name="model[council_meeting_id]">
    <option value=""></option>
  @foreach( $lists["CouncilMeeting"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('council_meeting_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($councilMeetingAgenda) && $councilMeetingAgenda->council_meeting_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.council_meeting_id"))
    <div class="invalid-feedback">{{ $errors->first("model.council_meeting_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




