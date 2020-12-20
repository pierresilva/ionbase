
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operMaintenanceRepair))
@if($errors->any()){{ old('model.name') }}@else{{ $operMaintenanceRepair->name ?? '' }}@endif
@endif" >

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
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
  <label for="time-field">HORA</label>


  @if($errors->has("model.time"))
    <div class="invalid-feedback">{{ $errors->first("model.time") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="completed_by-field">REPORTADO POR</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.completed_by")) is-invalid @else is-valid @endif @endif;
  " id="completed_by-field" name="model[completed_by]" value="
@if(isset($operMaintenanceRepair))
@if($errors->any()){{ old('model.completed_by') }}@else{{ $operMaintenanceRepair->completed_by ?? '' }}@endif
@endif" >

  @if($errors->has("model.completed_by"))
    <div class="invalid-feedback">{{ $errors->first("model.completed_by") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="oper_corrective_maintenance_id-field">OPERATIVIDAD MTTO CORRECTIVOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.oper_corrective_maintenance_id")) is-invalid @else is-valid @endif @endif
  " id="oper_corrective_maintenance_id-field" name="model[oper_corrective_maintenance_id]">
    <option value=""></option>
  @foreach( $lists["OperCorrectiveMaintenance"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('oper_corrective_maintenance_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operMaintenanceRepair) && $operMaintenanceRepair->oper_corrective_maintenance_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.oper_corrective_maintenance_id"))
    <div class="invalid-feedback">{{ $errors->first("model.oper_corrective_maintenance_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




