@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('corrPackets.index') }}">{{ $model_title_list['corrPackets'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['corrPackets'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['corrPackets'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('corrPackets.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('corrPackets.index') }}" accept-charset="UTF-8" method="get">
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
                              <label for="q_conveyor_cont" class="col-sm-2 col-form-label col-form-label-sm">TRANPORTADOR</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_conveyor_cont" name="q[conveyor:cont]" type="search" value="{{ @(Request::input('q.conveyor:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_guide_number_cont" class="col-sm-2 col-form-label col-form-label-sm">NÚMERO DE GUIA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_guide_number_cont" name="q[guide_number:cont]" type="search" value="{{ @(Request::input('q.guide_number:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_received_at_cont" class="col-sm-2 col-form-label col-form-label-sm">RECIBIDO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_received_at_cont" name="q[received_at:cont]" type="search" value="{{ @(Request::input('q.received_at:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_received_comment_cont" class="col-sm-2 col-form-label col-form-label-sm">COMENTARIO RECIBIDO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_received_comment_cont" name="q[received_comment:cont]" type="search" value="{{ @(Request::input('q.received_comment:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_delivered_at_cont" class="col-sm-2 col-form-label col-form-label-sm">ENTREGADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_delivered_at_cont" name="q[delivered_at:cont]" type="search" value="{{ @(Request::input('q.delivered_at:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_delivered_to_cont" class="col-sm-2 col-form-label col-form-label-sm">ENTREGADO A</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_delivered_to_cont" name="q[delivered_to:cont]" type="search" value="{{ @(Request::input('q.delivered_to:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_delivered_signature_cont" class="col-sm-2 col-form-label col-form-label-sm">FIRMA DE ENTREGADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_delivered_signature_cont" name="q[delivered_signature:cont]" type="search" value="{{ @(Request::input('q.delivered_signature:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_delivered_comment_cont" class="col-sm-2 col-form-label col-form-label-sm">COMENTARIO ENTREGADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_delivered_comment_cont" name="q[delivered_comment:cont]" type="search" value="{{ @(Request::input('q.delivered_comment:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_status_cont" class="col-sm-2 col-form-label col-form-label-sm">ESTADO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_status_cont" name="q[status:cont]" type="search" value="{{ @(Request::input('q.status:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                    <div class="form-group row">
                              <label for="q_hous_unit_id_eq" class="col-sm-2 col-form-label col-form-label-sm">UNIDADES HABITACIONALES<br>belongsTo</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_hous_unit_id_eq" name="q[hous_unit_id:eq]" type="search" value="{{ @(Request::input('q.hous_unit_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_hous_unit_id_eq"
                                    name="q[hous_unit_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["HousUnit"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                            @if( $list_key == @(Request::input('q.hous_unit_id:eq')) )  selected='selected' @endif
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

                      @include('corrPackets._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
