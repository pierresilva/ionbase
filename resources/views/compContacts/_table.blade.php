<div class="row">
    <div class="col-md-12">

        @if($compContacts->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compContacts, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compContacts, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compContacts, 'appends') )
                      <a href="javascript:sortByColumn('phone')">TELÉFONO</a>
                      @if( Request::input('q.s') == 'phone_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'phone_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      TELÉFONO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compContacts, 'appends') )
                      <a href="javascript:sortByColumn('email')">CORREO</a>
                      @if( Request::input('q.s') == 'email_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'email_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CORREO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compContacts, 'appends') )
                      <a href="javascript:sortByColumn('main')">PRINCIPAL</a>
                      @if( Request::input('q.s') == 'main_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'main_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PRINCIPAL                    @endif
                  </div></th>

                  <th scope="col">EMPRESAS</th>
                  <th scope="col">CARGOS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($compContacts as $compContact)
                    <tr>
                      <td scope="row"><a href="{{ route('compContacts.show', $compContact->id) }}">{{$compContact->id}}</a></td>
                      <td>{{$compContact->name}}</td>
                      <td>{{$compContact->phone}}</td>
                      <td>{{$compContact->email}}</td>
                      <td>{{$compContact->main}}</td>

                      <td>@if($compContact->company)<a href="{{ route('companies.show', $compContact->company->id) }}">{{ $compContact->company->name }}</a>@else - @endif</td>
                      <td>@if($compContact->systPosition)<a href="{{ route('systPositions.show', $compContact->systPosition->id) }}">{{ $compContact->systPosition->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('compContacts.duplicate', $compContact->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('compContacts.edit', $compContact->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('compContacts.destroy', $compContact->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($compContacts, 'appends') )
              {!! $compContacts->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>