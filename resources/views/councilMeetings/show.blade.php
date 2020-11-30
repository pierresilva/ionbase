@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('councilMeetings.index') }}">{{ $model_title_list['councilMeetings'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $councilMeeting->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['councilMeetings'] }} / Show #{{$councilMeeting->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('councilMeetings.destroy', $councilMeeting->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('councilMeetings.duplicate', $councilMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('councilMeetings.edit', $councilMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$councilMeeting->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $councilMeeting->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DESCRIPCIÓN : </strong></div><div>{{ $councilMeeting->description }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FECHA : </strong></div><div>{{ $councilMeeting->date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>HORA : </strong></div><div>{{ $councilMeeting->hour }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>LUGAR : </strong></div><div>{{ $councilMeeting->place }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DIRECCIÓN REUNIÓN VIRTUAL : </strong></div><div>{{ $councilMeeting->url }}</div></li>
                                                      
                                                                                          
                                                            <li class="list-group-item"><p><strong>ORDEN DEL DIA : </strong></p><div>
                          @include('councilMeetingAgendas._table', ['councilMeetingAgendas' => $councilMeeting->councilMeetingAgendas])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>CITACIONES A JUNTAS DEL CONCEJO : </strong></p><div>
                          @include('councilMeetingCitations._table', ['councilMeetingCitations' => $councilMeeting->councilMeetingCitations])
                        </div></li>
                                    
                                                                                          
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('councilMeetings.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection