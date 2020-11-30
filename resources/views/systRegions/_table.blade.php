<div class="row">
    <div class="col-md-12">

        @if($systRegions->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($systRegions, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($systRegions, 'appends') )
                      <a href="javascript:sortByColumn('name')">NAME</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NAME                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($systRegions, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>

                  <th scope="col">PAISES</th>

                  <th scope="col">PERFILES DE USUARIOS</th>
                  <th scope="col">CIUDADES</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($systRegions as $systRegion)
                    <tr>
                      <td scope="row"><a href="{{ route('systRegions.show', $systRegion->id) }}">{{$systRegion->id}}</a></td>
                      <td>{{$systRegion->name}}</td>
                      <td>{{$systRegion->code}}</td>

                      <td>@if($systRegion->systCountry)<a href="{{ route('systCountries.show', $systRegion->systCountry->id) }}">{{ $systRegion->systCountry->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($systRegion->userProfiles as $userProfile)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('userProfiles.show', $userProfile->id) }}">{{ $userProfile->name }}</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($systRegion->systCities as $systCity)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('systCities.show', $systCity->id) }}">{{ $systCity->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('systRegions.duplicate', $systRegion->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('systRegions.edit', $systRegion->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('systRegions.destroy', $systRegion->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($systRegions, 'appends') )
              {!! $systRegions->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>