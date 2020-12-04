<div class="row">
    <div class="col-md-12">

        @if($companies->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('nit')">NIT</a>
                      @if( Request::input('q.s') == 'nit_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'nit_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NIT                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('manager_name')">NOMBRE REPRESENTANTE LEGAL</a>
                      @if( Request::input('q.s') == 'manager_name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'manager_name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE REPRESENTANTE LEGAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('manager_document')">CÉDULA REPRESENTANTE LEGAL</a>
                      @if( Request::input('q.s') == 'manager_document_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'manager_document_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÉDULA REPRESENTANTE LEGAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('logo')">LOGOTIPO</a>
                      @if( Request::input('q.s') == 'logo_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'logo_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      LOGOTIPO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($companies, 'appends') )
                      <a href="javascript:sortByColumn('main')">PRINCIPAL</a>
                      @if( Request::input('q.s') == 'main_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'main_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PRINCIPAL                    @endif
                  </div></th>


                  <th scope="col">TELÉFONOS DE EMPRESAS</th>
                  <th scope="col">EMPRESAS DIRECCIONES</th>
                  <th scope="col">EMPRESAS CONTACTOS</th>
                  <th scope="col">EMPRESAS RESPONSABILIDADES LEGALES</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($companies as $company)
                    <tr>
                      <td scope="row"><a href="{{ route('companies.show', $company->id) }}">{{$company->id}}</a></td>
                      <td>{{$company->name}}</td>
                      <td>{{$company->code}}</td>
                      <td>{{$company->nit}}</td>
                      <td>{{$company->manager_name}}</td>
                      <td>{{$company->manager_document}}</td>
                      <td>{{$company->logo}}</td>
                      <td>{{$company->main}}</td>


                      <td>
                          @foreach($company->compPhones as $compPhone)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('compPhones.show', $compPhone->id) }}">{{ $compPhone->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($company->compAddresses as $compAddress)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('compAddresses.show', $compAddress->id) }}">{{ $compAddress->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($company->compContacts as $compContact)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('compContacts.show', $compContact->id) }}">{{ $compContact->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($company->compResponsabilities as $compResponsability)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('compResponsabilities.show', $compResponsability->id) }}">{{ $compResponsability->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('companies.duplicate', $company->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('companies.edit', $company->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('companies.destroy', $company->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($companies, 'appends') )
              {!! $companies->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>