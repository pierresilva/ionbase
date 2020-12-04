<div class="row">
    <div class="col-md-12">

        @if($housUnitAreas->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnitAreas, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnitAreas, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnitAreas, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>

                  <th scope="col">UNIDADES HABITACIONALES</th>

                  <th scope="col">AGENDA DE OPERACIONES</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($housUnitAreas as $housUnitArea)
                    <tr>
                      <td scope="row"><a href="{{ route('housUnitAreas.show', $housUnitArea->id) }}">{{$housUnitArea->id}}</a></td>
                      <td>{{$housUnitArea->name}}</td>
                      <td>{{$housUnitArea->code}}</td>

                      <td>@if($housUnitArea->housUnit)<a href="{{ route('housUnits.show', $housUnitArea->housUnit->id) }}">{{ $housUnitArea->housUnit->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($housUnitArea->operSchedules as $operSchedule)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operSchedules.show', $operSchedule->id) }}">{{ $operSchedule->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('housUnitAreas.duplicate', $housUnitArea->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('housUnitAreas.edit', $housUnitArea->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('housUnitAreas.destroy', $housUnitArea->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($housUnitAreas, 'appends') )
              {!! $housUnitAreas->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>