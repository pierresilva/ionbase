<div class="row">
    <div class="col-md-12">

        @if($corrPackets->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('conveyor')">TRANPORTADOR</a>
                      @if( Request::input('q.s') == 'conveyor_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'conveyor_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      TRANPORTADOR                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('guide_number')">NÚMERO DE GUIA</a>
                      @if( Request::input('q.s') == 'guide_number_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'guide_number_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NÚMERO DE GUIA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('received_at')">RECIBIDO</a>
                      @if( Request::input('q.s') == 'received_at_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'received_at_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      RECIBIDO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('received_comment')">COMENTARIO RECIBIDO</a>
                      @if( Request::input('q.s') == 'received_comment_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'received_comment_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      COMENTARIO RECIBIDO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('delivered_at')">ENTREGADO</a>
                      @if( Request::input('q.s') == 'delivered_at_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'delivered_at_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ENTREGADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('delivered_to')">ENTREGADO A</a>
                      @if( Request::input('q.s') == 'delivered_to_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'delivered_to_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ENTREGADO A                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('delivered_signature')">FIRMA DE ENTREGADO</a>
                      @if( Request::input('q.s') == 'delivered_signature_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'delivered_signature_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FIRMA DE ENTREGADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('delivered_comment')">COMENTARIO ENTREGADO</a>
                      @if( Request::input('q.s') == 'delivered_comment_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'delivered_comment_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      COMENTARIO ENTREGADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($corrPackets, 'appends') )
                      <a href="javascript:sortByColumn('status')">ESTADO</a>
                      @if( Request::input('q.s') == 'status_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'status_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ESTADO                    @endif
                  </div></th>

                  <th scope="col">UNIDADES HABITACIONALES</th>



                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($corrPackets as $corrPacket)
                    <tr>
                      <td scope="row"><a href="{{ route('corrPackets.show', $corrPacket->id) }}">{{$corrPacket->id}}</a></td>
                      <td>{{$corrPacket->name}}</td>
                      <td>{{$corrPacket->conveyor}}</td>
                      <td>{{$corrPacket->guide_number}}</td>
                      <td>{{$corrPacket->received_at}}</td>
                      <td>{{$corrPacket->received_comment}}</td>
                      <td>{{$corrPacket->delivered_at}}</td>
                      <td>{{$corrPacket->delivered_to}}</td>
                      <td>{{$corrPacket->delivered_signature}}</td>
                      <td>{{$corrPacket->delivered_comment}}</td>
                      <td>{{$corrPacket->status}}</td>

                      <td>@if($corrPacket->housUnit)<a href="{{ route('housUnits.show', $corrPacket->housUnit->id) }}">{{ $corrPacket->housUnit->name }}</a>@else - @endif</td>



                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('corrPackets.duplicate', $corrPacket->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('corrPackets.edit', $corrPacket->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('corrPackets.destroy', $corrPacket->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($corrPackets, 'appends') )
              {!! $corrPackets->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>