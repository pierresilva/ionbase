@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('operPreventiveMaintenances.index') }}">{{ $model_title_list['operPreventiveMaintenances'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['operPreventiveMaintenances'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['operPreventiveMaintenances'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('operPreventiveMaintenances.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('operPreventiveMaintenances.index') }}" accept-charset="UTF-8" method="get">
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
                              <label for="q_date_cont" class="col-sm-2 col-form-label col-form-label-sm">FECHA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_date_cont" name="q[date:cont]" type="search" value="{{ @(Request::input('q.date:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_time_cont" class="col-sm-2 col-form-label col-form-label-sm">HORA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_time_cont" name="q[time:cont]" type="search" value="{{ @(Request::input('q.time:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_next_cont" class="col-sm-2 col-form-label col-form-label-sm">SIGUIENTE EN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_next_cont" name="q[next:cont]" type="search" value="{{ @(Request::input('q.next:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                    <div class="form-group row">
                              <label for="q_oper_machine_id_eq" class="col-sm-2 col-form-label col-form-label-sm">OPERATIVIDAD MAQUINARIA<br>belongsTo</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_oper_machine_id_eq" name="q[oper_machine_id:eq]" type="search" value="{{ @(Request::input('q.oper_machine_id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_oper_machine_id_eq"
                                    name="q[oper_machine_id:eq]">
                                <option value=""></option>
                                @foreach( $lists["OperMachine"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                            @if( $list_key == @(Request::input('q.oper_machine_id:eq')) )  selected='selected' @endif
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

                      @include('operPreventiveMaintenances._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
