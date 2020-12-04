<div class="row">
    <div class="col-md-12">

        @if($compPhones->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compPhones, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compPhones, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compPhones, 'appends') )
                      <a href="javascript:sortByColumn('number')">NÚMERO</a>
                      @if( Request::input('q.s') == 'number_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'number_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NÚMERO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($compPhones, 'appends') )
                      <a href="javascript:sortByColumn('main')">PRINCIPAL</a>
                      @if( Request::input('q.s') == 'main_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'main_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PRINCIPAL                    @endif
                  </div></th>

                  <th scope="col">EMPRESAS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($compPhones as $compPhone)
                    <tr>
                      <td scope="row"><a href="{{ route('compPhones.show', $compPhone->id) }}">{{$compPhone->id}}</a></td>
                      <td>{{$compPhone->name}}</td>
                      <td>{{$compPhone->number}}</td>
                      <td>{{$compPhone->main}}</td>

                      <td>@if($compPhone->company)<a href="{{ route('companies.show', $compPhone->company->id) }}">{{ $compPhone->company->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('compPhones.duplicate', $compPhone->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('compPhones.edit', $compPhone->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('compPhones.destroy', $compPhone->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($compPhones, 'appends') )
              {!! $compPhones->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>