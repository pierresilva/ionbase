@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('housUnits.index') }}">{{ $model_title_list['housUnits'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $housUnit->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['housUnits'] }} / Show #{{$housUnit->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('housUnits.destroy', $housUnit->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('housUnits.duplicate', $housUnit->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('housUnits.edit', $housUnit->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$housUnit->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>PADRE : </strong></div><div>{{ $housUnit->hous_unit_id }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $housUnit->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CÓDIGO : </strong></div><div>{{ $housUnit->code }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE DEL CONTACTO : </strong></div><div>{{ $housUnit->contact_first_name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>APELLIDO DEL CONTACTO : </strong></div><div>{{ $housUnit->contact_last_name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>TELÉFONO DEL CONTACTO : </strong></div><div>{{ $housUnit->contact_phone }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>EMAIL DEL CONTACTO : </strong></div><div>{{ $housUnit->contact_email }}</div></li>
                                                      
                                                                                                                              
                                                            <li class="list-group-item"><p><strong>AREAS DE UNIDADES HABITACIONALES : </strong></p><div>
                          @include('housUnitAreas._table', ['housUnitAreas' => $housUnit->housUnitAreas])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>SECTORES OPERATIVOS : </strong></p><div>
                          @include('operSectors._table', ['operSectors' => $housUnit->operSectors])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>CORRESPONDENCIA PAQUETES : </strong></p><div>
                          @include('corrPackets._table', ['corrPackets' => $housUnit->corrPackets])
                        </div></li>
                                    
                                                                                                                              
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('housUnits.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection