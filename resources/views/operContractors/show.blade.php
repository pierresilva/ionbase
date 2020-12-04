@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('operContractors.index') }}">{{ $model_title_list['operContractors'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $operContractor->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['operContractors'] }} / Show #{{$operContractor->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('operContractors.destroy', $operContractor->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('operContractors.duplicate', $operContractor->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('operContractors.edit', $operContractor->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$operContractor->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $operContractor->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DOCUMENTO : </strong></div><div>{{ $operContractor->document }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DIRECCIÓN : </strong></div><div>{{ $operContractor->address }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>TELÉFONO : </strong></div><div>{{ $operContractor->phone }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CORREO : </strong></div><div>{{ $operContractor->email }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>TELÉFONO DE SOPORTE : </strong></div><div>{{ $operContractor->phone_support }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CORREO DE SOPORTE : </strong></div><div>{{ $operContractor->email_support }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CONTACTO : </strong></div><div>{{ $operContractor->contact }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>HORARIO DE ATENCIÓN : </strong></div><div>{{ $operContractor->business_hour }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>TELÉFONO DE EMERGENCIA : </strong></div><div>{{ $operContractor->phone_emergency }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CORREO DE EMERGENCIA : </strong></div><div>{{ $operContractor->email_emergency }}</div></li>
                                                      
                                                      
                                                            <li class="list-group-item"><p><strong>MOVIMIENTOS OPERATIVOS : </strong></p><div>
                          @include('operMovements._table', ['operMovements' => $operContractor->operMovements])
                        </div></li>
                                    
                                                      
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('operContractors.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection