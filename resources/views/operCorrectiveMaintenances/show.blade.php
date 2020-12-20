@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('operCorrectiveMaintenances.index') }}">{{ $model_title_list['operCorrectiveMaintenances'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $operCorrectiveMaintenance->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['operCorrectiveMaintenances'] }} / Show #{{$operCorrectiveMaintenance->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('operCorrectiveMaintenances.destroy', $operCorrectiveMaintenance->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('operCorrectiveMaintenances.duplicate', $operCorrectiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('operCorrectiveMaintenances.edit', $operCorrectiveMaintenance->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$operCorrectiveMaintenance->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $operCorrectiveMaintenance->name }}</div></li>
                                                                                                                                                                                          <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DETALLE : </strong></div><div>{{ $operCorrectiveMaintenance->detail }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FECHA : </strong></div><div>{{ $operCorrectiveMaintenance->date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>HORA : </strong></div><div>{{ $operCorrectiveMaintenance->time }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>REPORTADO POR : </strong></div><div>{{ $operCorrectiveMaintenance->reported_by }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ESTADO : </strong></div><div>{{ $operCorrectiveMaintenance->status }}</div></li>
                                                      
                                                            <li class="list-group-item d-inline-flex flex-wrap"><div><strong>OPERATIVIDAD MOTIVOS MTTO CORRECTIVO : </strong></div><div>{{ $operCorrectiveMaintenance->operReason->name ?? '' }}</div></li>
                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>UNIDADES HABITACIONALES AREAS : </strong></div><div>{{ $operCorrectiveMaintenance->housUnitArea->name ?? '' }}</div></li>
                                                                                                            
                                                                                                                                                                        <li class="list-group-item"><p><strong>OPERATIVIDAD REPARACIONES : </strong></p><div>
                          @include('operMaintenanceRepairs._table', ['operMaintenanceRepairs' => $operCorrectiveMaintenance->operMaintenanceRepairs])
                        </div></li>
                                    
                                                                                                                                    <li class="list-group-item d-inline-flex flex-wrap"><div><strong>OPERATIVIDAD ITEMS MTTO CORRECTIVO : </strong></div><div>
                          @foreach($operCorrectiveMaintenance->operItems as $my_child)
                              @if (!$loop->first) , @endif
                              {{ $my_child->name }}(
                                                )
                          @endforeach </div></li>
                                                                        
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('operCorrectiveMaintenances.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection