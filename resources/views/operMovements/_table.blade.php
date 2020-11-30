<div class="row">
    <div class="col-md-12">

        @if($operMovements->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('date_statr')">FECHA INICIO</a>
                      @if( Request::input('q.s') == 'date_statr_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_statr_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA INICIO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('date_end')">FECHA FINAL</a>
                      @if( Request::input('q.s') == 'date_end_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_end_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA FINAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('time_start')">HORA INICIAL</a>
                      @if( Request::input('q.s') == 'time_start_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_start_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA INICIAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('time_end')">HORA FINAL</a>
                      @if( Request::input('q.s') == 'time_end_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_end_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA FINAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('time_total')">TIEMPO UTILIZADO</a>
                      @if( Request::input('q.s') == 'time_total_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_total_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      TIEMPO UTILIZADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operMovements, 'appends') )
                      <a href="javascript:sortByColumn('photo')">FOTO DEL AREA INTERVENIDA</a>
                      @if( Request::input('q.s') == 'photo_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'photo_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FOTO DEL AREA INTERVENIDA                    @endif
                  </div></th>

                  <th scope="col">SECTORES OPERATIVOS</th>
                  <th scope="col">CONTRATISTAS OPERATIVOS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operMovements as $operMovement)
                    <tr>
                      <td scope="row"><a href="{{ route('operMovements.show', $operMovement->id) }}">{{$operMovement->id}}</a></td>
                      <td>{{$operMovement->name}}</td>
                      <td>{{$operMovement->date_statr}}</td>
                      <td>{{$operMovement->date_end}}</td>
                      <td>{{$operMovement->time_start}}</td>
                      <td>{{$operMovement->time_end}}</td>
                      <td>{{$operMovement->time_total}}</td>
                      <td>{{$operMovement->photo}}</td>

                      <td>@if($operMovement->operSector)<a href="{{ route('operSectors.show', $operMovement->operSector->id) }}">{{ $operMovement->operSector->name }}</a>@else - @endif</td>
                      <td>@if($operMovement->operContractor)<a href="{{ route('operContractors.show', $operMovement->operContractor->id) }}">{{ $operMovement->operContractor->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operMovements.duplicate', $operMovement->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operMovements.edit', $operMovement->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operMovements.destroy', $operMovement->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operMovements, 'appends') )
              {!! $operMovements->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>