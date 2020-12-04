<div class="row">
    <div class="col-md-12">

        @if($counMeetingCitations->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetingCitations, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetingCitations, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetingCitations, 'appends') )
                      <a href="javascript:sortByColumn('attended')">ASISTIÓ</a>
                      @if( Request::input('q.s') == 'attended_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'attended_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ASISTIÓ                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetingCitations, 'appends') )
                      <a href="javascript:sortByColumn('signed')">FIRMÓ</a>
                      @if( Request::input('q.s') == 'signed_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'signed_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FIRMÓ                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($counMeetingCitations, 'appends') )
                      <a href="javascript:sortByColumn('signature')">FIRMA</a>
                      @if( Request::input('q.s') == 'signature_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'signature_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FIRMA                    @endif
                  </div></th>

                  <th scope="col">JUNTAS DEL CONSEJO</th>
                  <th scope="col">USUARIOS</th>
                  <th scope="col">JUNTAS MIEMBROS</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($counMeetingCitations as $counMeetingCitation)
                    <tr>
                      <td scope="row"><a href="{{ route('counMeetingCitations.show', $counMeetingCitation->id) }}">{{$counMeetingCitation->id}}</a></td>
                      <td>{{$counMeetingCitation->name}}</td>
                      <td>{{$counMeetingCitation->attended}}</td>
                      <td>{{$counMeetingCitation->signed}}</td>
                      <td>{{$counMeetingCitation->signature}}</td>

                      <td>@if($counMeetingCitation->counMeeting)<a href="{{ route('counMeetings.show', $counMeetingCitation->counMeeting->id) }}">{{ $counMeetingCitation->counMeeting->name }}</a>@else - @endif</td>
                      <td>@if($counMeetingCitation->user)<a href="{{ route('users.show', $counMeetingCitation->user->id) }}">{{ $counMeetingCitation->user->name }}</a>@else - @endif</td>
                      <td>@if($counMeetingCitation->counMember)<a href="{{ route('counMembers.show', $counMeetingCitation->counMember->id) }}">{{ $counMeetingCitation->counMember->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('counMeetingCitations.duplicate', $counMeetingCitation->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('counMeetingCitations.edit', $counMeetingCitation->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('counMeetingCitations.destroy', $counMeetingCitation->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($counMeetingCitations, 'appends') )
              {!! $counMeetingCitations->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>