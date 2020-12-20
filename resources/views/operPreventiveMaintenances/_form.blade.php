
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operPreventiveMaintenance))
@if($errors->any()){{ old('model.name') }}@else{{ $operPreventiveMaintenance->name ?? '' }}@endif
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
  <label for="next-field">SIGUIENTE EN</label>


  @if($errors->has("model.next"))
    <div class="invalid-feedback">{{ $errors->first("model.next") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="oper_machine_id-field">OPERATIVIDAD MAQUINARIA</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.oper_machine_id")) is-invalid @else is-valid @endif @endif
  " id="oper_machine_id-field" name="model[oper_machine_id]">
    <option value=""></option>
  @foreach( $lists["OperMachine"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('oper_machine_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operPreventiveMaintenance) && $operPreventiveMaintenance->oper_machine_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.oper_machine_id"))
    <div class="invalid-feedback">{{ $errors->first("model.oper_machine_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>




