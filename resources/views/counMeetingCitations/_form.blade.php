
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($counMeetingCitation))
@if($errors->any()){{ old('model.name') }}@else{{ $counMeetingCitation->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="attended-field">ASISTIÓ</label>


  @if($errors->has("model.attended"))
    <div class="invalid-feedback">{{ $errors->first("model.attended") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="signed-field">FIRMÓ</label>


  @if($errors->has("model.signed"))
    <div class="invalid-feedback">{{ $errors->first("model.signed") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="signature-field">FIRMA</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.signature")) is-invalid @else is-valid @endif @endif;
  " id="signature-field" name="model[signature]" value="
@if(isset($counMeetingCitation))
@if($errors->any()){{ old('model.signature') }}@else{{ $counMeetingCitation->signature ?? '' }}@endif
@endif" >

  @if($errors->has("model.signature"))
    <div class="invalid-feedback">{{ $errors->first("model.signature") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="coun_meeting_id-field">JUNTAS DEL CONSEJO</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.coun_meeting_id")) is-invalid @else is-valid @endif @endif
  " id="coun_meeting_id-field" name="model[coun_meeting_id]">
    <option value=""></option>
  @foreach( $lists["CounMeeting"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('coun_meeting_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($counMeetingCitation) && $counMeetingCitation->coun_meeting_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.coun_meeting_id"))
    <div class="invalid-feedback">{{ $errors->first("model.coun_meeting_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="user_id-field">USUARIOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.user_id")) is-invalid @else is-valid @endif @endif
  " id="user_id-field" name="model[user_id]">
    <option value=""></option>
  @foreach( $lists["User"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('user_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($counMeetingCitation) && $counMeetingCitation->user_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.user_id"))
    <div class="invalid-feedback">{{ $errors->first("model.user_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="coun_member_id-field">JUNTAS MIEMBROS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.coun_member_id")) is-invalid @else is-valid @endif @endif
  " id="coun_member_id-field" name="model[coun_member_id]">
    <option value=""></option>
  @foreach( $lists["CounMember"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('coun_member_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($counMeetingCitation) && $counMeetingCitation->coun_member_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.coun_member_id"))
    <div class="invalid-feedback">{{ $errors->first("model.coun_member_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




