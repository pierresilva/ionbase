@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('counMeetingCitations.index') }}">{{ $model_title_list['counMeetingCitations'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $counMeetingCitation->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['counMeetingCitations'] }} / Show #{{$counMeetingCitation->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('counMeetingCitations.destroy', $counMeetingCitation->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('counMeetingCitations.duplicate', $counMeetingCitation->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('counMeetingCitations.edit', $counMeetingCitation->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$counMeetingCitation->id}}</div></li>

                                                                                                                                                                                          <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $counMeetingCitation->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ASISTIÓ : </strong></div><div>{{ $counMeetingCitation->attended }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FIRMÓ : </strong></div><div>{{ $counMeetingCitation->signed }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FIRMA : </strong></div><div>{{ $counMeetingCitation->signature }}</div></li>
                                                      
                                                            <li class="list-group-item d-inline-flex flex-wrap"><div><strong>JUNTAS DEL CONSEJO : </strong></div><div>{{ $counMeetingCitation->counMeeting->name ?? '' }}</div></li>
                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>USUARIOS : </strong></div><div>{{ $counMeetingCitation->user->name ?? '' }}</div></li>
                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>JUNTAS MIEMBROS : </strong></div><div>{{ $counMeetingCitation->counMember->name ?? '' }}</div></li>
                                    
                                                                                                                              
                                                                                                                              
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('counMeetingCitations.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection