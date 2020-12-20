<div class="row">
    <div class="col-md-12">

        @if($operCorrectiveMaintenances->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('detail')">DETALLE</a>
                      @if( Request::input('q.s') == 'detail_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'detail_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DETALLE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('time')">HORA</a>
                      @if( Request::input('q.s') == 'time_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('reported_by')">REPORTADO POR</a>
                      @if( Request::input('q.s') == 'reported_by_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'reported_by_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      REPORTADO POR                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('status')">ESTADO</a>
                      @if( Request::input('q.s') == 'status_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'status_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ESTADO                    @endif
                  </div></th>

                  <th scope="col">OPERATIVIDAD MOTIVOS MTTO CORRECTIVO</th>
                  <th scope="col">UNIDADES HABITACIONALES AREAS</th>

                  <th scope="col">OPERATIVIDAD REPARACIONES</th>

                  <th scope="col">OPERATIVIDAD ITEMS MTTO CORRECTIVO</th>

                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operCorrectiveMaintenances as $operCorrectiveMaintenance)
                    <tr>
                      <td scope="row"><a href="{{ route('operCorrectiveMaintenances.show', $operCorrectiveMaintenance->id) }}">{{$operCorrectiveMaintenance->id}}</a></td>
                      <td>{{$operCorrectiveMaintenance->name}}</td>
                      <td>{{$operCorrectiveMaintenance->detail}}</td>
                      <td>{{$operCorrectiveMaintenance->date}}</td>
                      <td>{{$operCorrectiveMaintenance->time}}</td>
                      <td>{{$operCorrectiveMaintenance->reported_by}}</td>
                      <td>{{$operCorrectiveMaintenance->status}}</td>

                      <td>@if($operCorrectiveMaintenance->operReason)<a href="{{ route('operReasons.show', $operCorrectiveMaintenance->operReason->id) }}">{{ $operCorrectiveMaintenance->operReason->name }}</a>@else - @endif</td>
                      <td>@if($operCorrectiveMaintenance->housUnitArea)<a href="{{ route('housUnitAreas.show', $operCorrectiveMaintenance->housUnitArea->id) }}">{{ $operCorrectiveMaintenance->housUnitArea->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($operCorrectiveMaintenance->operMaintenanceRepairs as $operMaintenanceRepair)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operMaintenanceRepairs.show', $operMaintenanceRepair->id) }}">{{ $operMaintenanceRepair->name }}</a>
                          @endforeach
                      </td>

                      <td>
                          @foreach($operCorrectiveMaintenance->operItems as $operItem)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operItems.show', $operItem->id) }}">{{ $operItem->name }}(
                                        )</a>
                          @endforeach
                      </td>

                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operCorrectiveMaintenances.duplicate', $operCorrectiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operCorrectiveMaintenances.edit', $operCorrectiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operCorrectiveMaintenances.destroy', $operCorrectiveMaintenance->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operCorrectiveMaintenances, 'appends') )
              {!! $operCorrectiveMaintenances->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>