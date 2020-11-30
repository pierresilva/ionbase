<div class="row">
    <div class="col-md-12">

        @if($councilMeetings->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('description')">DESCRIPCIÓN</a>
                      @if( Request::input('q.s') == 'description_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'description_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DESCRIPCIÓN                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('date')">FECHA</a>
                      @if( Request::input('q.s') == 'date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('hour')">HORA</a>
                      @if( Request::input('q.s') == 'hour_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'hour_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HORA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('place')">LUGAR</a>
                      @if( Request::input('q.s') == 'place_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'place_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      LUGAR                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($councilMeetings, 'appends') )
                      <a href="javascript:sortByColumn('url')">DIRECCIÓN REUNIÓN VIRTUAL</a>
                      @if( Request::input('q.s') == 'url_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'url_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DIRECCIÓN REUNIÓN VIRTUAL                    @endif
                  </div></th>


                  <th scope="col">ORDEN DEL DIA</th>
                  <th scope="col">CITACIONES A JUNTAS DEL CONCEJO</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($councilMeetings as $councilMeeting)
                    <tr>
                      <td scope="row"><a href="{{ route('councilMeetings.show', $councilMeeting->id) }}">{{$councilMeeting->id}}</a></td>
                      <td>{{$councilMeeting->name}}</td>
                      <td>{{$councilMeeting->description}}</td>
                      <td>{{$councilMeeting->date}}</td>
                      <td>{{$councilMeeting->hour}}</td>
                      <td>{{$councilMeeting->place}}</td>
                      <td>{{$councilMeeting->url}}</td>


                      <td>
                          @foreach($councilMeeting->councilMeetingAgendas as $councilMeetingAgenda)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('councilMeetingAgendas.show', $councilMeetingAgenda->id) }}">{{ $councilMeetingAgenda->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($councilMeeting->councilMeetingCitations as $councilMeetingCitation)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('councilMeetingCitations.show', $councilMeetingCitation->id) }}">{{ $councilMeetingCitation->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('councilMeetings.duplicate', $councilMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('councilMeetings.edit', $councilMeeting->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('councilMeetings.destroy', $councilMeeting->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($councilMeetings, 'appends') )
              {!! $councilMeetings->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>