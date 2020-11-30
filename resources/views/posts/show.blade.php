@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">{{ $model_title_list['posts'] }}</a></li>
                  <li class="breadcrumb-item active">#{{ $post->id }}</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">subject</i>
                          <span class="d-inline-block">{{ $model_title_list['posts'] }} / Show #{{$post->id}}</span>
                          <form class="ml-auto" method="POST" action="{{ route('posts.destroy', $post->id) }}" accept-charset="UTF-8" style="display: inline;" onsubmit="if(confirm('Delete? Are you sure?')) { return true } else {return false };">
                              {{ method_field('DELETE') }}
                              {{ csrf_field() }}
                              <div class="btn-group" role="group">
                                  <a class="btn btn-sm btn-primary" href="{{ route('posts.duplicate', $post->id) }}" data-toggle="tooltip" data-placement="top" title="Duplicate"><i class="material-icons d-block">add_to_photos</i></a>
                                  <a class="btn btn-sm btn-warning" href="{{ route('posts.edit', $post->id) }}" data-toggle="tooltip" data-placement="top" title="Edit"><i class="material-icons d-block">edit</i></a>
                                  <button type="submit" class="btn btn-sm btn-danger" data-toggle="tooltip" data-placement="top" title="Delete"><i class="material-icons d-block">delete</i></button>
                              </div>
                          </form>
                      </h1> 

                      <ul class="list-group list-group-flush mt-4">
                        <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ID ： </strong></div><div>{{$post->id}}</div></li>

                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>NOMBRE : </strong></div><div>{{ $post->name }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>RESUMEN : </strong></div><div>{{ $post->summary }}</div></li>
                                                                                                                                                                                          <li class="list-group-item d-inline-flex flex-wrap"><div><strong>PUBLICADO : </strong></div><div>{{ $post->published }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>DESDE : </strong></div><div>{{ $post->from_date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>HASTA : </strong></div><div>{{ $post->to_date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ACEPTADO : </strong></div><div>{{ $post->accepted }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>FECHA DE PROMICIÓN : </strong></div><div>{{ $post->promotion_date }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>IMÁGEN PROMOCIÓN : </strong></div><div>{{ $post->promotion_image }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CONTENIDO : </strong></div><div>{{ $post->content }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CÓDIGO : </strong></div><div>{{ $post->code }}</div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ESTADO : </strong></div><div>{{ $post->status }}</div></li>
                                                      
                                                            <li class="list-group-item d-inline-flex flex-wrap"><div><strong>USUARIOS : </strong></div><div>{{ $post->user->name ?? '' }}</div></li>
                                                                              <li class="list-group-item d-inline-flex flex-wrap"><div><strong>CATEGORÍAS : </strong></div><div>{{ $post->category->name ?? '' }}</div></li>
                                                                                                                                                
                                                                                                                                                                        <li class="list-group-item"><p><strong>COMENTARIOS : </strong></p><div>
                          @include('comments._table', ['comments' => $post->comments])
                        </div></li>
                                                                        
                                                                                                                                    <li class="list-group-item d-inline-flex flex-wrap"><div><strong>ETIQUETAS : </strong></div><div>
                          @foreach($post->tags as $my_child)
                              @if (!$loop->first) , @endif
                              {{ $my_child->name }}(
                                                )
                          @endforeach </div></li>
                                                                                                                  <li class="list-group-item d-inline-flex flex-wrap"><div><strong>IMÁGENES : </strong></div><div>
                          @foreach($post->images as $my_child)
                              @if (!$loop->first) , @endif
                              {{ $my_child->name }}(
                                                )
                          @endforeach </div></li>
                                    
                      </ul>
                      <div class="d-flex justify-content-end mt-3">
                          <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('posts.index') }}"><i class="material-icons">fast_rewind</i> Back</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection