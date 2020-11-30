
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($companyDirectorate))
@if($errors->any()){{ old('model.name') }}@else{{ $companyDirectorate->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="company_id-field">EMPRESAS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.company_id")) is-invalid @else is-valid @endif @endif
  " id="company_id-field" name="model[company_id]">
    <option value=""></option>
  @foreach( $lists["Company"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('company_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($companyDirectorate) && $companyDirectorate->company_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.company_id"))
    <div class="invalid-feedback">{{ $errors->first("model.company_id") }}</div>
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
        @if( isset($companyDirectorate) && $companyDirectorate->user_id==$list_key )  selected='selected' @endif
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
        @if( isset($companyDirectorate) && $companyDirectorate->syst_position_id==$list_key )  selected='selected' @endif
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




