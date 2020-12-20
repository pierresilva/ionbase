<div class="row">
    <div class="col-md-12">

        @if($operMaintenanceRepairs->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMaintenanceRepairs, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMaintenanceRepairs, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMaintenanceRepairs, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMaintenanceRepairs, 'appends') )
                      <a href="javascript:sortByColumn('time')">HORA</a>
                      @if( Request::input('q.s') == 'time_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMaintenanceRepairs, 'appends') )
                      <a href="javascript:sortByColumn('completed_by')">REPORTADO POR</a>
                      @if( Request::input('q.s') == 'completed_by_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'completed_by_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      REPORTADO POR                    @endif
                  </div></th>

                  <th scope="col">OPERATIVIDAD MTTO CORRECTIVOS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operMaintenanceRepairs as $operMaintenanceRepair)
                    <tr>
                      <td scope="row"><a href="{{ route('operMaintenanceRepairs.show', $operMaintenanceRepair->id) }}">{{$operMaintenanceRepair->id}}</a></td>
                      <td>{{$operMaintenanceRepair->name}}</td>
                      <td>{{$operMaintenanceRepair->date}}</td>
                      <td>{{$operMaintenanceRepair->time}}</td>
                      <td>{{$operMaintenanceRepair->completed_by}}</td>

                      <td>@if($operMaintenanceRepair->operCorrectiveMaintenance)<a href="{{ route('operCorrectiveMaintenances.show', $operMaintenanceRepair->operCorrectiveMaintenance->id) }}">{{ $operMaintenanceRepair->operCorrectiveMaintenance->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operMaintenanceRepairs.duplicate', $operMaintenanceRepair->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operMaintenanceRepairs.edit', $operMaintenanceRepair->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operMaintenanceRepairs.destroy', $operMaintenanceRepair->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operMaintenanceRepairs, 'appends') )
              {!! $operMaintenanceRepairs->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>