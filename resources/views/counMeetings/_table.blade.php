<div class="row">
    <div class="col-md-12">

        @if($counMeetings->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('description')">DESCRIPCIÓN</a>
                      @if( Request::input('q.s') == 'description_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'description_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DESCRIPCIÓN                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('hour')">HORA</a>
                      @if( Request::input('q.s') == 'hour_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'hour_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('place')">LUGAR</a>
                      @if( Request::input('q.s') == 'place_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'place_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      LUGAR                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('url')">DIRECCIÓN REUNIÓN VIRTUAL</a>
                      @if( Request::input('q.s') == 'url_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'url_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DIRECCIÓN REUNIÓN VIRTUAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('act')">ACTA</a>
                      @if( Request::input('q.s') == 'act_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'act_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ACTA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('status')">ESTADO</a>
                      @if( Request::input('q.s') == 'status_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'status_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ESTADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('start_content')">INICIO</a>
                      @if( Request::input('q.s') == 'start_content_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'start_content_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      INICIO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('end_content')">FINAL</a>
                      @if( Request::input('q.s') == 'end_content_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'end_content_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FINAL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('consecutive')">CONSECUTIVO</a>
                      @if( Request::input('q.s') == 'consecutive_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'consecutive_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CONSECUTIVO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetings, 'appends') )
                      <a href="javascript:sortByColumn('type')">TIPO</a>
                      @if( Request::input('q.s') == 'type_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'type_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      TIPO                    @endif
                  </div></th>


                  <th scope="col">JUNTAS AGENDAS</th>
                  <th scope="col">JUNTAS CITACIONES</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($counMeetings as $counMeeting)
                    <tr>
                      <td scope="row"><a href="{{ route('counMeetings.show', $counMeeting->id) }}">{{$counMeeting->id}}</a></td>
                      <td>{{$counMeeting->name}}</td>
                      <td>{{$counMeeting->description}}</td>
                      <td>{{$counMeeting->date}}</td>
                      <td>{{$counMeeting->hour}}</td>
                      <td>{{$counMeeting->place}}</td>
                      <td>{{$counMeeting->url}}</td>
                      <td>{{$counMeeting->act}}</td>
                      <td>{{$counMeeting->status}}</td>
                      <td>{{$counMeeting->start_content}}</td>
                      <td>{{$counMeeting->end_content}}</td>
                      <td>{{$counMeeting->consecutive}}</td>
                      <td>{{$counMeeting->type}}</td>


                      <td>
                          @foreach($counMeeting->counMeetingAgendas as $counMeetingAgenda)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('counMeetingAgendas.show', $counMeetingAgenda->id) }}">{{ $counMeetingAgenda->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($counMeeting->counMeetingCitations as $counMeetingCitation)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('counMeetingCitations.show', $counMeetingCitation->id) }}">{{ $counMeetingCitation->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('counMeetings.duplicate', $counMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('counMeetings.edit', $counMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('counMeetings.destroy', $counMeeting->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($counMeetings, 'appends') )
              {!! $counMeetings->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>