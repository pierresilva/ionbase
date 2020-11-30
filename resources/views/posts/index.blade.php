@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('posts.index') }}">{{ $model_title_list['posts'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['posts'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['posts'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('posts.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('posts.index') }}" accept-charset="UTF-8" method="get">
                            <input type="hidden" name="q[s]" value="{{ @(Request::input('q')['s']) ?: '' }}" />
                            <div class="form-group row">
                              <label for="q_id_eq" class="col-sm-2 col-form-label col-form-label-sm">ID</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_id_eq" name="q[id:eq]" type="search" value="{{ @(Request::input('q.id:eq')) }}">
                              </div>
                            </div>

                                                                                                                <div class="form-group row">
                              <label for="q_name_cont" class="col-sm-2 col-form-label col-form-label-sm">NOMBRE</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_name_cont" name="q[name:cont]" type="search" value="{{ @(Request::input('q.name:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_summary_cont" class="col-sm-2 col-form-label col-form-label-sm">RESUMEN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_summary_cont" name="q[summary:cont]" type="search" value="{{ @(Request::input('q.summary:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                                                                                                                                        <div class="form-group row">
                              <label for="q_published_cont" class="col-sm-2 col-form-label col-form-label-sm">PUBLICADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_published_cont" name="q[published:cont]" type="search" value="{{ @(Request::input('q.published:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_from_date_cont" class="col-sm-2 col-form-label col-form-label-sm">DESDE</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_from_date_cont" name="q[from_date:cont]" type="search" value="{{ @(Request::input('q.from_date:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_to_date_cont" class="col-sm-2 col-form-label col-form-label-sm">HASTA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_to_date_cont" name="q[to_date:cont]" type="search" value="{{ @(Request::input('q.to_date:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_accepted_cont" class="col-sm-2 col-form-label col-form-label-sm">ACEPTADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_accepted_cont" name="q[accepted:cont]" type="search" value="{{ @(Request::input('q.accepted:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_promotion_date_cont" class="col-sm-2 col-form-label col-form-label-sm">FECHA DE PROMICIÓN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_promotion_date_cont" name="q[promotion_date:cont]" type="search" value="{{ @(Request::input('q.promotion_date:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_promotion_image_cont" class="col-sm-2 col-form-label col-form-label-sm">IMÁGEN PROMOCIÓN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_promotion_image_cont" name="q[promotion_image:cont]" type="search" value="{{ @(Request::input('q.promotion_image:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_content_cont" class="col-sm-2 col-form-label col-form-label-sm">CONTENIDO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_content_cont" name="q[content:cont]" type="search" value="{{ @(Request::input('q.content:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_code_cont" class="col-sm-2 col-form-label col-form-label-sm">CÓDIGO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_code_cont" name="q[code:cont]" type="search" value="{{ @(Request::input('q.code:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_status_cont" class="col-sm-2 col-form-label col-form-label-sm">ESTADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_status_cont" name="q[status:cont]" type="search" value="{{ @(Request::input('q.status:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                    <div class="form-group row">
                              <label for="q_user_id_eq" class="col-sm-2 col-form-label col-form-label-sm">USUARIOS<br>belongsTo</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_user_id_eq" name="q[user_id:eq]" type="search" value="{{ @(Request::input('q.user_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_user_id_eq"
                                    name="q[user_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["User"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                            @if( $list_key == @(Request::input('q.user_id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_category_id_eq" class="col-sm-2 col-form-label col-form-label-sm">CATEGORÍAS<br>belongsTo</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_category_id_eq" name="q[category_id:eq]" type="search" value="{{ @(Request::input('q.category_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_category_id_eq"
                                    name="q[category_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["Category"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                            @if( $list_key == @(Request::input('q.category_id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                                                                                <div class="form-group row">
                              <label for="q_tag_id_cont" class="col-sm-2 col-form-label col-form-label-sm">ETIQUETAS<br>belongsToMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_tag_id_cont" name="q[tags.tag_id:eq]" type="search" value="{{ @(Request::input('q.tags.tag_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_tag_id_eq"
                                    name="q[tags.tag_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["Tag"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.tags.tag_id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                            <div class="form-group row">
                              <label for="q_comments_id_eq" class="col-sm-2 col-form-label col-form-label-sm">COMENTARIOS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_comments_id_eq" name="q[comments.id:eq]" type="search" value="{{ @(Request::input('q.comments.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_comments_id_eq"
                                    name="q[comments.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["Comment"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.comments.id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                                                    <div class="form-group row">
                              <label for="q_image_id_cont" class="col-sm-2 col-form-label col-form-label-sm">IMÁGENES<br>belongsToMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_image_id_cont" name="q[images.image_id:eq]" type="search" value="{{ @(Request::input('q.images.image_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_image_id_eq"
                                    name="q[images.image_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["Image"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.images.image_id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                        
                            <div class="form-group row mb-0">
                                <div class="col-sm-10 offset-sm-2">
                                    <input type="submit" name="commit" value="Search" class="btn btn-primary btn-sm" />
                                </div>
                            </div>
                          </form>

                        </div>
                      </div>

                      @include('posts._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
