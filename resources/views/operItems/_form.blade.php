
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operItem))
@if($errors->any()){{ old('model.name') }}@else{{ $operItem->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="inventory_code-field">CÓDIGO INVENTARIO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.inventory_code")) is-invalid @else is-valid @endif @endif;
  " id="inventory_code-field" name="model[inventory_code]" value="
@if(isset($operItem))
@if($errors->any()){{ old('model.inventory_code') }}@else{{ $operItem->inventory_code ?? '' }}@endif
@endif" >

  @if($errors->has("model.inventory_code"))
    <div class="invalid-feedback">{{ $errors->first("model.inventory_code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>









<div class="form-group manytomany">
    <label for="pivotsoperItemCheckbox">OPERATIVIDAD MTTO CORRECTIVOS</label>
    <div class="form-check form-check-inline flex-wrap">
        @foreach($lists['OperCorrectiveMaintenance'] as $list_key => $list_item)
        <div class="form-group mb-1">
          <input name="pivots[oper_corrective_maintenance][{{ $list_key }}][id]" type="checkbox" id="pivotsOperCorrectiveMaintenanceCheckbox{{ $list_key }}" value="{{ $list_key }}" class="form-check-input manytomany-trigger
              @if($errors->has('pivots.oper_corrective_maintenance.'.$list_key.'.*')) is-invalid @endif
              "
              @if( $errors->any() && old('pivots.oper_corrective_maintenance.'.$list_key.'.id')) checked
              @elseif( !$errors->any() && isset($operItem) && $operItem->operCorrectiveMaintenances->find($list_key) ) checked
              @endif
          ><label class="form-check-label mr-2" for="pivotsOperCorrectiveMaintenanceCheckbox{{ $list_key }}">{{ $list_item }}</label>
        </div>
        @endforeach
    </div>
    @if ($errors->has('pivots.oper_item.*.*'))
    <div><span class="text-danger">There were some problems with your pivot input.</span></div>
    @endif

    <!-- manytomany Modal -->
    <div class="modal fade manytomany-modal needs-validation-with-save" id="operCorrectiveMaintenanceModal" tabindex="-1" role="dialog" aria-labelledby="operCorrectiveMaintenanceModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">OperCorrectiveMaintenance Option</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary save">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    @if( old('pivots.oper_corrective_maintenance') )
        @foreach( old('pivots.oper_corrective_maintenance') as $oper_corrective_maintenance_id => $oper_corrective_maintenance )
            @foreach( $oper_corrective_maintenance as $pivot_key => $pivot_value )
                @if( $loop->index > 0 )
                    <input type="hidden" name="pivots[oper_corrective_maintenance][{{ $oper_corrective_maintenance_id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[oper_corrective_maintenance][{{ $oper_corrective_maintenance_id }}]">
                @endif
            @endforeach
        @endforeach
    @elseif( isset($operItem) )
        @foreach( $operItem->operCorrectiveMaintenances as $oper_corrective_maintenance )
            @foreach( $oper_corrective_maintenance->pivot->toArray() as $pivot_key => $pivot_value )
                @if( $loop->index > 1 && $pivot_key !== 'created_at' && $pivot_key !== 'updated_at')
                    <input type="hidden" name="pivots[oper_corrective_maintenance][{{ $oper_corrective_maintenance->id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[oper_corrective_maintenance][{{ $oper_corrective_maintenance->id }}]">
                @endif
            @endforeach
        @endforeach
    @endif
    @if($errors->has('pivots.oper_corrective_maintenance.*.*'))
        @foreach($errors->get('pivots.oper_corrective_maintenance.*') as $error_key => $error_value)
                    <input type="hidden" name="errors.{{$error_key}}" value="{{$error_value[0]}}" disabled="disabled">
        @endforeach
    @endif

</div>

