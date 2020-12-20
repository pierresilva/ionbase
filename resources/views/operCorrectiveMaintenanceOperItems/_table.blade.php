<div class="row">
    <div class="col-md-12">

        @if($operCorrectiveMaintenanceOperItems->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($operCorrectiveMaintenanceOperItems, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>




                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($operCorrectiveMaintenanceOperItems as $operCorrectiveMaintenanceOperItem)
                    <tr>
                      <td scope="row"><a href="{{ route('operCorrectiveMaintenanceOperItems.show', $operCorrectiveMaintenanceOperItem->id) }}">{{$operCorrectiveMaintenanceOperItem->id}}</a></td>




                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('operCorrectiveMaintenanceOperItems.duplicate', $operCorrectiveMaintenanceOperItem->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('operCorrectiveMaintenanceOperItems.edit', $operCorrectiveMaintenanceOperItem->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('operCorrectiveMaintenanceOperItems.destroy', $operCorrectiveMaintenanceOperItem->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($operCorrectiveMaintenanceOperItems, 'appends') )
              {!! $operCorrectiveMaintenanceOperItems->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>