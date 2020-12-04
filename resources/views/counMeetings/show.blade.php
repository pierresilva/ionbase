@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('counMeetings.index') }}">{{ $model_title_list['counMeetings'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $counMeeting->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['counMeetings'] }} / Show #{{$counMeeting->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('counMeetings.destroy', $counMeeting->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('counMeetings.duplicate', $counMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('counMeetings.edit', $counMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$counMeeting->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $counMeeting->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DESCRIPCIÓN : </strong></div><div>{{ $counMeeting->description }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FECHA : </strong></div><div>{{ $counMeeting->date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>HORA : </strong></div><div>{{ $counMeeting->hour }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>LUGAR : </strong></div><div>{{ $counMeeting->place }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DIRECCIÓN REUNIÓN VIRTUAL : </strong></div><div>{{ $counMeeting->url }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ACTA : </strong></div><div>{{ $counMeeting->act }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ESTADO : </strong></div><div>{{ $counMeeting->status }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>INICIO : </strong></div><div>{{ $counMeeting->start_content }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FINAL : </strong></div><div>{{ $counMeeting->end_content }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CONSECUTIVO : </strong></div><div>{{ $counMeeting->consecutive }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>TIPO : </strong></div><div>{{ $counMeeting->type }}</div></li>
                                                      
                                                                                          
                                                            <li class="list-group-item"><p><strong>JUNTAS AGENDAS : </strong></p><div>
                          @include('counMeetingAgendas._table', ['counMeetingAgendas' => $counMeeting->counMeetingAgendas])
                        </div></li>
                                                                              <li class="list-group-item"><p><strong>JUNTAS CITACIONES : </strong></p><div>
                          @include('counMeetingCitations._table', ['counMeetingCitations' => $counMeeting->counMeetingCitations])
                        </div></li>
                                    
                                                                                          
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('counMeetings.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection