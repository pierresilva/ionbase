<div class="row">
    <div class="col-md-12">

        @if($housUnits->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('hous_unit_id')">PADRE</a>
                      @if( Request::input('q.s') == 'hous_unit_id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'hous_unit_id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PADRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('contact_first_name')">NOMBRE DEL CONTACTO</a>
                      @if( Request::input('q.s') == 'contact_first_name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contact_first_name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE DEL CONTACTO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('contact_last_name')">APELLIDO DEL CONTACTO</a>
                      @if( Request::input('q.s') == 'contact_last_name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contact_last_name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      APELLIDO DEL CONTACTO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('contact_phone')">TELÉFONO DEL CONTACTO</a>
                      @if( Request::input('q.s') == 'contact_phone_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contact_phone_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      TELÉFONO DEL CONTACTO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($housUnits, 'appends') )
                      <a href="javascript:sortByColumn('contact_email')">EMAIL DEL CONTACTO</a>
                      @if( Request::input('q.s') == 'contact_email_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'contact_email_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      EMAIL DEL CONTACTO                    @endif
                  </div></th>


                  <th scope="col">AREAS DE UNIDADES HABITACIONALES</th>
                  <th scope="col">SECTORES OPERATIVOS</th>
                  <th scope="col">CORRESPONDENCIA PAQUETES</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($housUnits as $housUnit)
                    <tr>
                      <td scope="row"><a href="{{ route('housUnits.show', $housUnit->id) }}">{{$housUnit->id}}</a></td>
                      <td>{{$housUnit->hous_unit_id}}</td>
                      <td>{{$housUnit->name}}</td>
                      <td>{{$housUnit->code}}</td>
                      <td>{{$housUnit->contact_first_name}}</td>
                      <td>{{$housUnit->contact_last_name}}</td>
                      <td>{{$housUnit->contact_phone}}</td>
                      <td>{{$housUnit->contact_email}}</td>


                      <td>
                          @foreach($housUnit->housUnitAreas as $housUnitArea)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('housUnitAreas.show', $housUnitArea->id) }}">{{ $housUnitArea->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($housUnit->operSectors as $operSector)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('operSectors.show', $operSector->id) }}">{{ $operSector->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($housUnit->corrPackets as $corrPacket)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('corrPackets.show', $corrPacket->id) }}">{{ $corrPacket->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('housUnits.duplicate', $housUnit->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('housUnits.edit', $housUnit->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('housUnits.destroy', $housUnit->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($housUnits, 'appends') )
              {!! $housUnits->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>