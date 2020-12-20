<div class="row">
    <div class="col-md-12">

        @if($operReplacements->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operReplacements, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operReplacements, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operReplacements, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operReplacements, 'appends') )
                      <a href="javascript:sortByColumn('time')">HORA</a>
                      @if( Request::input('q.s') == 'time_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'time_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operReplacements, 'appends') )
                      <a href="javascript:sortByColumn('warranty')">GARANTIA</a>
                      @if( Request::input('q.s') == 'warranty_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'warranty_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      GARANTIA                    @endif
                  </div></th>

                  <th scope="col">OPERATIVIDAD MAQUINARIA</th>
                  <th scope="col">CONTRATISTAS OPERATIVOS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operReplacements as $operReplacement)
                    <tr>
                      <td scope="row"><a href="{{ route('operReplacements.show', $operReplacement->id) }}">{{$operReplacement->id}}</a></td>
                      <td>{{$operReplacement->name}}</td>
                      <td>{{$operReplacement->date}}</td>
                      <td>{{$operReplacement->time}}</td>
                      <td>{{$operReplacement->warranty}}</td>

                      <td>@if($operReplacement->operMachine)<a href="{{ route('operMachines.show', $operReplacement->operMachine->id) }}">{{ $operReplacement->operMachine->name }}</a>@else - @endif</td>
                      <td>@if($operReplacement->operContractor)<a href="{{ route('operContractors.show', $operReplacement->operContractor->id) }}">{{ $operReplacement->operContractor->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operReplacements.duplicate', $operReplacement->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operReplacements.edit', $operReplacement->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operReplacements.destroy', $operReplacement->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operReplacements, 'appends') )
              {!! $operReplacements->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>