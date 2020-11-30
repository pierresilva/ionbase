@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('systPositions.index') }}">{{ $model_title_list['systPositions'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['systPositions'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['systPositions'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('systPositions.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('systPositions.index') }}" accept-charset="UTF-8" method="get">
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
                              <label for="q_code_cont" class="col-sm-2 col-form-label col-form-label-sm">CÓDIGO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_code_cont" name="q[code:cont]" type="search" value="{{ @(Request::input('q.code:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                                                <div class="form-group row">
                              <label for="q_users_id_eq" class="col-sm-2 col-form-label col-form-label-sm">USUARIOS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_users_id_eq" name="q[users.id:eq]" type="search" value="{{ @(Request::input('q.users.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_users_id_eq"
                                    name="q[users.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["User"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.users.id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_company_contacts_id_eq" class="col-sm-2 col-form-label col-form-label-sm">CONTACTOS DE EMPRESAS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_company_contacts_id_eq" name="q[companyContacts.id:eq]" type="search" value="{{ @(Request::input('q.companyContacts.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_company_contacts_id_eq"
                                    name="q[companyContacts.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["CompanyContact"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.companyContacts.id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_company_directorates_id_eq" class="col-sm-2 col-form-label col-form-label-sm">JUNTA DIRECTIVA<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_company_directorates_id_eq" name="q[companyDirectorates.id:eq]" type="search" value="{{ @(Request::input('q.companyDirectorates.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_company_directorates_id_eq"
                                    name="q[companyDirectorates.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["CompanyDirectorate"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.companyDirectorates.id:eq')) )  selected='selected' @endif
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

                      @include('systPositions._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection