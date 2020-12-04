@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('companies.index') }}">{{ $model_title_list['companies'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $company->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['companies'] }} / Show #{{$company->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('companies.destroy', $company->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('companies.duplicate', $company->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('companies.edit', $company->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$company->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $company->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CÓDIGO : </strong></div><div>{{ $company->code }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NIT : </strong></div><div>{{ $company->nit }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE REPRESENTANTE LEGAL : </strong></div><div>{{ $company->manager_name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CÉDULA REPRESENTANTE LEGAL : </strong></div><div>{{ $company->manager_document }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>LOGOTIPO : </strong></div><div>{{ $company->logo }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>PRINCIPAL : </strong></div><div>{{ $company->main }}</div></li>
                                                      
                                                                                                                                                                  
                                                            <li class="list-group-item"><p><strong>TELÉFONOS DE EMPRESAS : </strong></p><div>
                          @include('compPhones._table', ['compPhones' => $company->compPhones])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>EMPRESAS DIRECCIONES : </strong></p><div>
                          @include('compAddresses._table', ['compAddresses' => $company->compAddresses])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>EMPRESAS CONTACTOS : </strong></p><div>
                          @include('compContacts._table', ['compContacts' => $company->compContacts])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>EMPRESAS RESPONSABILIDADES LEGALES : </strong></p><div>
                          @include('compResponsabilities._table', ['compResponsabilities' => $company->compResponsabilities])
                        </div></li>
                                    
                                                                                                                                                                  
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('companies.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection