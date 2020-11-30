
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operSchedule))
@if($errors->any()){{ old('model.name') }}@else{{ $operSchedule->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="housing_unit_area_id-field">AREAS DE UNIDADES HABITACIONALES</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.housing_unit_area_id")) is-invalid @else is-valid @endif @endif
  " id="housing_unit_area_id-field" name="model[housing_unit_area_id]">
    <option value=""></option>
  @foreach( $lists["HousingUnitArea"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('housing_unit_area_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operSchedule) && $operSchedule->housing_unit_area_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.housing_unit_area_id"))
    <div class="invalid-feedback">{{ $errors->first("model.housing_unit_area_id") }}</div>
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
        @if( isset($operSchedule) && $operSchedule->oper_sector_id==$list_key )  selected='selected' @endif
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




