<div class="row">
    <div class="col-md-12">

        @if($files->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('file')">ARCHIVO</a>
                      @if( Request::input('q.s') == 'file_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'file_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ARCHIVO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('extension')">EXTENSION</a>
                      @if( Request::input('q.s') == 'extension_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'extension_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      EXTENSION                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('mime')">MIME</a>
                      @if( Request::input('q.s') == 'mime_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'mime_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      MIME                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('url')">URL</a>
                      @if( Request::input('q.s') == 'url_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'url_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      URL                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('filableid')">ARCHIVABLE ID</a>
                      @if( Request::input('q.s') == 'filableid_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'filableid_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ARCHIVABLE ID                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($files, 'appends') )
                      <a href="javascript:sortByColumn('fileable_type')">ARCHIVABLE TIPO</a>
                      @if( Request::input('q.s') == 'fileable_type_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'fileable_type_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ARCHIVABLE TIPO                    @endif
                  </div></th>




                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($files as $file)
                    <tr>
                      <td scope="row"><a href="{{ route('files.show', $file->id) }}">{{$file->id}}</a></td>
                      <td>{{$file->name}}</td>
                      <td>{{$file->file}}</td>
                      <td>{{$file->extension}}</td>
                      <td>{{$file->mime}}</td>
                      <td>{{$file->url}}</td>
                      <td>{{$file->filableid}}</td>
                      <td>{{$file->fileable_type}}</td>




                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('files.duplicate', $file->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('files.edit', $file->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('files.destroy', $file->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($files, 'appends') )
              {!! $files->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>