<div class="row">
    <div class="col-md-12">

        @if($operMachines->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMachines, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMachines, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMachines, 'appends') )
                      <a href="javascript:sortByColumn('contract_expiration_date')">FECHA VENCIMIENTO CONTRATO</a>
                      @if( Request::input('q.s') == 'contract_expiration_date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contract_expiration_date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA VENCIMIENTO CONTRATO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMachines, 'appends') )
                      <a href="javascript:sortByColumn('contract_monthly_price')">VALOR MENSUAL</a>
                      @if( Request::input('q.s') == 'contract_monthly_price_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contract_monthly_price_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      VALOR MENSUAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMachines, 'appends') )
                      <a href="javascript:sortByColumn('monthly_periodicity')">PERIODICIDAD MENSUAL</a>
                      @if( Request::input('q.s') == 'monthly_periodicity_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'monthly_periodicity_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PERIODICIDAD MENSUAL                    @endif
                  </div></th>

                  <th scope="col">UNIDADES HABITACIONALES AREAS</th>
                  <th scope="col">CONTRATISTAS OPERATIVOS</th>

                  <th scope="col">OPERATIVIDAD MTTO PREVENTIVOS</th>
                  <th scope="col">OPERATIVIDAD REPUESTOS</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operMachines as $operMachine)
                    <tr>
                      <td scope="row"><a href="{{ route('operMachines.show', $operMachine->id) }}">{{$operMachine->id}}</a></td>
                      <td>{{$operMachine->name}}</td>
                      <td>{{$operMachine->contract_expiration_date}}</td>
                      <td>{{$operMachine->contract_monthly_price}}</td>
                      <td>{{$operMachine->monthly_periodicity}}</td>

                      <td>@if($operMachine->housUnitArea)<a href="{{ route('housUnitAreas.show', $operMachine->housUnitArea->id) }}">{{ $operMachine->housUnitArea->name }}</a>@else - @endif</td>
                      <td>@if($operMachine->operContractor)<a href="{{ route('operContractors.show', $operMachine->operContractor->id) }}">{{ $operMachine->operContractor->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($operMachine->operPreventiveMaintenances as $operPreventiveMaintenance)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operPreventiveMaintenances.show', $operPreventiveMaintenance->id) }}">{{ $operPreventiveMaintenance->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($operMachine->operReplacements as $operReplacement)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operReplacements.show', $operReplacement->id) }}">{{ $operReplacement->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operMachines.duplicate', $operMachine->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operMachines.edit', $operMachine->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operMachines.destroy', $operMachine->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                                {{ method_field('DELETE') }}
                                {{ csrf_field() }}
                                <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                            </form>
                        </div>
                      </td>
                    </tr>
                @endforeach
              </tbody>
            </table>
            @if( method_exists($operMachines, 'appends') )
              {!! $operMachines->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>