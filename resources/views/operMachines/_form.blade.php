
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operMachine))
@if($errors->any()){{ old('model.name') }}@else{{ $operMachine->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contract_expiration_date-field">FECHA VENCIMIENTO CONTRATO</label>


  @if($errors->has("model.contract_expiration_date"))
    <div class="invalid-feedback">{{ $errors->first("model.contract_expiration_date") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="contract_monthly_price-field">VALOR MENSUAL</label>


  @if($errors->has("model.contract_monthly_price"))
    <div class="invalid-feedback">{{ $errors->first("model.contract_monthly_price") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="monthly_periodicity-field">PERIODICIDAD MENSUAL</label>


  @if($errors->has("model.monthly_periodicity"))
    <div class="invalid-feedback">{{ $errors->first("model.monthly_periodicity") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="hous_unit_area_id-field">UNIDADES HABITACIONALES AREAS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.hous_unit_area_id")) is-invalid @else is-valid @endif @endif
  " id="hous_unit_area_id-field" name="model[hous_unit_area_id]">
    <option value=""></option>
  @foreach( $lists["HousUnitArea"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('hous_unit_area_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operMachine) && $operMachine->hous_unit_area_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.hous_unit_area_id"))
    <div class="invalid-feedback">{{ $errors->first("model.hous_unit_area_id") }}</div>
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
        @if( isset($operMachine) && $operMachine->oper_contractor_id==$list_key )  selected='selected' @endif
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




