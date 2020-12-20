
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($operCorrectiveMaintenance))
@if($errors->any()){{ old('model.name') }}@else{{ $operCorrectiveMaintenance->name ?? '' }}@endif
@endif" >

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="detail-field">DETALLE</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.detail")) is-invalid @else is-valid @endif @endif;
  " id="detail-field" name="model[detail]" rows="3" >
@if(isset($operCorrectiveMaintenance))
@if($errors->any()){{ old('model.detail') }}@else{{ $operCorrectiveMaintenance->detail ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.detail"))
    <div class="invalid-feedback">{{ $errors->first("model.detail") }}</div>
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
  <label for="reported_by-field">REPORTADO POR</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.reported_by")) is-invalid @else is-valid @endif @endif;
  " id="reported_by-field" name="model[reported_by]" value="
@if(isset($operCorrectiveMaintenance))
@if($errors->any()){{ old('model.reported_by') }}@else{{ $operCorrectiveMaintenance->reported_by ?? '' }}@endif
@endif" >

  @if($errors->has("model.reported_by"))
    <div class="invalid-feedback">{{ $errors->first("model.reported_by") }}</div>
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
  <label for="oper_reason_id-field">OPERATIVIDAD MOTIVOS MTTO CORRECTIVO</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.oper_reason_id")) is-invalid @else is-valid @endif @endif
  " id="oper_reason_id-field" name="model[oper_reason_id]">
    <option value=""></option>
  @foreach( $lists["OperReason"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('oper_reason_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($operCorrectiveMaintenance) && $operCorrectiveMaintenance->oper_reason_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.oper_reason_id"))
    <div class="invalid-feedback">{{ $errors->first("model.oper_reason_id") }}</div>
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
        @if( isset($operCorrectiveMaintenance) && $operCorrectiveMaintenance->hous_unit_area_id==$list_key )  selected='selected' @endif
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





<div class="form-group manytomany">
    <label for="pivotsoperCorrectiveMaintenanceCheckbox">OPERATIVIDAD ITEMS MTTO CORRECTIVO</label>
    <div class="form-check form-check-inline flex-wrap">
        @foreach($lists['OperItem'] as $list_key => $list_item)
        <div class="form-group mb-1">
          <input name="pivots[oper_item][{{ $list_key }}][id]" type="checkbox" id="pivotsOperItemCheckbox{{ $list_key }}" value="{{ $list_key }}" class="form-check-input manytomany-trigger
              @if($errors->has('pivots.oper_item.'.$list_key.'.*')) is-invalid @endif
              "
              @if( $errors->any() && old('pivots.oper_item.'.$list_key.'.id')) checked
              @elseif( !$errors->any() && isset($operCorrectiveMaintenance) && $operCorrectiveMaintenance->operItems->find($list_key) ) checked
              @endif
          ><label class="form-check-label mr-2" for="pivotsOperItemCheckbox{{ $list_key }}">{{ $list_item }}</label>
        </div>
        @endforeach
    </div>
    @if ($errors->has('pivots.oper_corrective_maintenance.*.*'))
    <div><span class="text-danger">There were some problems with your pivot input.</span></div>
    @endif

    <!-- manytomany Modal -->
    <div class="modal fade manytomany-modal needs-validation-with-save" id="operItemModal" tabindex="-1" role="dialog" aria-labelledby="operItemModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">OperItem Option</h4>
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

    @if( old('pivots.oper_item') )
        @foreach( old('pivots.oper_item') as $oper_item_id => $oper_item )
            @foreach( $oper_item as $pivot_key => $pivot_value )
                @if( $loop->index > 0 )
                    <input type="hidden" name="pivots[oper_item][{{ $oper_item_id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[oper_item][{{ $oper_item_id }}]">
                @endif
            @endforeach
        @endforeach
    @elseif( isset($operCorrectiveMaintenance) )
        @foreach( $operCorrectiveMaintenance->operItems as $oper_item )
            @foreach( $oper_item->pivot->toArray() as $pivot_key => $pivot_value )
                @if( $loop->index > 1 && $pivot_key !== 'created_at' && $pivot_key !== 'updated_at')
                    <input type="hidden" name="pivots[oper_item][{{ $oper_item->id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[oper_item][{{ $oper_item->id }}]">
                @endif
            @endforeach
        @endforeach
    @endif
    @if($errors->has('pivots.oper_item.*.*'))
        @foreach($errors->get('pivots.oper_item.*') as $error_key => $error_value)
                    <input type="hidden" name="errors.{{$error_key}}" value="{{$error_value[0]}}" disabled="disabled">
        @endforeach
    @endif

</div>

