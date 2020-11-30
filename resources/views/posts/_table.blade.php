<div class="row">
    <div class="col-md-12">

        @if($posts->count())

            <table class="table table-sm table-striped sp-omit">
              <thead>
                <tr>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('id')">ID</a>
                      @if( Request::input('q.s') == 'id_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'id_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ID
                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('name')">NOMBRE</a>
                      @if( Request::input('q.s') == 'name_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'name_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      NOMBRE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('summary')">RESUMEN</a>
                      @if( Request::input('q.s') == 'summary_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'summary_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      RESUMEN                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('published')">PUBLICADO</a>
                      @if( Request::input('q.s') == 'published_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'published_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      PUBLICADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('from_date')">DESDE</a>
                      @if( Request::input('q.s') == 'from_date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'from_date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      DESDE                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('to_date')">HASTA</a>
                      @if( Request::input('q.s') == 'to_date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'to_date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      HASTA                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('accepted')">ACEPTADO</a>
                      @if( Request::input('q.s') == 'accepted_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'accepted_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ACEPTADO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('promotion_date')">FECHA DE PROMICIÓN</a>
                      @if( Request::input('q.s') == 'promotion_date_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'promotion_date_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      FECHA DE PROMICIÓN                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('promotion_image')">IMÁGEN PROMOCIÓN</a>
                      @if( Request::input('q.s') == 'promotion_image_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'promotion_image_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      IMÁGEN PROMOCIÓN                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('content')">CONTENIDO</a>
                      @if( Request::input('q.s') == 'content_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'content_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CONTENIDO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('code')">CÓDIGO</a>
                      @if( Request::input('q.s') == 'code_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'code_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      CÓDIGO                    @endif
                  </div></th>
                  <th scope="col"><div class="d-flex">
                    @if( method_exists($posts, 'appends') )
                      <a href="javascript:sortByColumn('status')">ESTADO</a>
                      @if( Request::input('q.s') == 'status_asc' )<i class="material-icons">arrow_drop_up</i>
                      @elseif( Request::input('q.s') == 'status_desc' )<i class="material-icons">arrow_drop_down</i> @endif
                    @else
                      ESTADO                    @endif
                  </div></th>

                  <th scope="col">USUARIOS</th>
                  <th scope="col">CATEGORÍAS</th>

                  <th scope="col">COMENTARIOS</th>

                  <th scope="col">ETIQUETAS</th>
                  <th scope="col">IMÁGENES</th>

                  <th class="text-right" scope="col">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                @foreach($posts as $post)
                    <tr>
                      <td scope="row"><a href="{{ route('posts.show', $post->id) }}">{{$post->id}}</a></td>
                      <td>{{$post->name}}</td>
                      <td>{{$post->summary}}</td>
                      <td>{{$post->published}}</td>
                      <td>{{$post->from_date}}</td>
                      <td>{{$post->to_date}}</td>
                      <td>{{$post->accepted}}</td>
                      <td>{{$post->promotion_date}}</td>
                      <td>{{$post->promotion_image}}</td>
                      <td>{{$post->content}}</td>
                      <td>{{$post->code}}</td>
                      <td>{{$post->status}}</td>

                      <td>@if($post->user)<a href="{{ route('users.show', $post->user->id) }}">{{ $post->user->name }}</a>@else - @endif</td>
                      <td>@if($post->category)<a href="{{ route('categories.show', $post->category->id) }}">{{ $post->category->name }}</a>@else - @endif</td>

                      <td>
                          @foreach($post->comments as $comment)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('comments.show', $comment->id) }}">{{ $comment->name }}</a>
                          @endforeach
                      </td>

                      <td>
                          @foreach($post->tags as $tag)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('tags.show', $tag->id) }}">{{ $tag->name }}(
                                        )</a>
                          @endforeach
                      </td>
                      <td>
                          @foreach($post->images as $image)
                                        @if (!$loop->first) , @endif
                                        <a href="{{ route('images.show', $image->id) }}">{{ $image->name }}(
                                        )</a>
                          @endforeach
                      </td>

                      <td class="text-right">
                        <div class="btn-group" role="group">
                            <a class="btn btn-sm btn-primary" href="{{ route('posts.duplicate', $post->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                            <a class="btn btn-sm btn-warning" href="{{ route('posts.edit', $post->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                            <form method="POST" action="{{ route('posts.destroy', $post->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
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
            @if( method_exists($posts, 'appends') )
              {!! $posts->appends(Request::except('page'))->render() !!}
            @endif
        @else
            <h3 class="text-center alert alert-info">Empty!</h3>
        @endif
    </div>
</div>