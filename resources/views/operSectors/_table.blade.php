<div class="row">
    <div class="col-md-12">

        @if($operSectors->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operSectors, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operSectors, 'appends') )
                      <a href="javascript:sortByColumn('name')">NAME</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NAME                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operSectors, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>

                  <th scope="col">UNIDADES HABITACIONALES</th>

                  <th scope="col">AGENDA DE OPERACIONES</th>
                  <th scope="col">MOVIMIENTOS OPERATIVOS</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operSectors as $operSector)
                    <tr>
                      <td scope="row"><a href="{{ route('operSectors.show', $operSector->id) }}">{{$operSector->id}}</a></td>
                      <td>{{$operSector->name}}</td>
                      <td>{{$operSector->code}}</td>

                      <td>@if($operSector->housingUnit)<a href="{{ route('housingUnits.show', $operSector->housingUnit->id) }}">{{ $operSector->housingUnit->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($operSector->operSchedules as $operSchedule)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operSchedules.show', $operSchedule->id) }}">{{ $operSchedule->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($operSector->operMovements as $operMovement)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operMovements.show', $operMovement->id) }}">{{ $operMovement->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operSectors.duplicate', $operSector->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operSectors.edit', $operSector->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operSectors.destroy', $operSector->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operSectors, 'appends') )
              {!! $operSectors->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>