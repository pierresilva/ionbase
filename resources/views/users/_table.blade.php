<div class="row">
    <div class="col-md-12">

        @if($users->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($users, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($users, 'appends') )
                      <a href="javascript:sortByColumn('name')">NAME</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NAME                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($users, 'appends') )
                      <a href="javascript:sortByColumn('email')">EMAIL</a>
                      @if( Request::input('q.s') == 'email_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'email_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      EMAIL                    @endif
                  </div></th>


                  <th scope="col">ENTRADAS</th>


                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($users as $user)
                    <tr>
                      <td scope="row"><a href="{{ route('users.show', $user->id) }}">{{$user->id}}</a></td>
                      <td>{{$user->name}}</td>
                      <td>{{$user->email}}</td>


                      <td>
                          @foreach($user->posts as $post)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('posts.show', $post->id) }}">{{ $post->name }}</a>
                          @endforeach
                      </td>


                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('users.duplicate', $user->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('users.edit', $user->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('users.destroy', $user->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($users, 'appends') )
              {!! $users->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>