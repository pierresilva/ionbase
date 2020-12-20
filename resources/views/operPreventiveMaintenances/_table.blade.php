<div class="row">
    <div class="col-md-12">

        @if($operPreventiveMaintenances->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operPreventiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operPreventiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operPreventiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operPreventiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('time')">HORA</a>
                      @if( Request::input('q.s') == 'time_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operPreventiveMaintenances, 'appends') )
                      <a href="javascript:sortByColumn('next')">SIGUIENTE EN</a>
                      @if( Request::input('q.s') == 'next_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'next_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      SIGUIENTE EN                    @endif
                  </div></th>

                  <th scope="col">OPERATIVIDAD MAQUINARIA</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operPreventiveMaintenances as $operPreventiveMaintenance)
                    <tr>
                      <td scope="row"><a href="{{ route('operPreventiveMaintenances.show', $operPreventiveMaintenance->id) }}">{{$operPreventiveMaintenance->id}}</a></td>
                      <td>{{$operPreventiveMaintenance->name}}</td>
                      <td>{{$operPreventiveMaintenance->date}}</td>
                      <td>{{$operPreventiveMaintenance->time}}</td>
                      <td>{{$operPreventiveMaintenance->next}}</td>

                      <td>@if($operPreventiveMaintenance->operMachine)<a href="{{ route('operMachines.show', $operPreventiveMaintenance->operMachine->id) }}">{{ $operPreventiveMaintenance->operMachine->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operPreventiveMaintenances.duplicate', $operPreventiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operPreventiveMaintenances.edit', $operPreventiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operPreventiveMaintenances.destroy', $operPreventiveMaintenance->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operPreventiveMaintenances, 'appends') )
              {!! $operPreventiveMaintenances->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>