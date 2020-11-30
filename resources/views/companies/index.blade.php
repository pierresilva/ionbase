@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('companies.index') }}">{{ $model_title_list['companies'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['companies'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['companies'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('companies.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('companies.index') }}" accept-charset="UTF-8" method="get">
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
                              <label for="q_nit_cont" class="col-sm-2 col-form-label col-form-label-sm">NIT</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_nit_cont" name="q[nit:cont]" type="search" value="{{ @(Request::input('q.nit:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_manager_name_cont" class="col-sm-2 col-form-label col-form-label-sm">NOMBRE REPRESENTANTE LEGAL</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_manager_name_cont" name="q[manager_name:cont]" type="search" value="{{ @(Request::input('q.manager_name:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_manager_document_cont" class="col-sm-2 col-form-label col-form-label-sm">CÉDULA REPRESENTANTE LEGAL</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_manager_document_cont" name="q[manager_document:cont]" type="search" value="{{ @(Request::input('q.manager_document:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_logo_cont" class="col-sm-2 col-form-label col-form-label-sm">LOGOTIPO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_logo_cont" name="q[logo:cont]" type="search" value="{{ @(Request::input('q.logo:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_main_cont" class="col-sm-2 col-form-label col-form-label-sm">PRINCIPAL</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_main_cont" name="q[main:cont]" type="search" value="{{ @(Request::input('q.main:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                                                <div class="form-group row">
                              <label for="q_company_phones_id_eq" class="col-sm-2 col-form-label col-form-label-sm">TELÉFONOS DE EMPRESAS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_company_phones_id_eq" name="q[companyPhones.id:eq]" type="search" value="{{ @(Request::input('q.companyPhones.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_company_phones_id_eq"
                                    name="q[companyPhones.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["CompanyPhone"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.companyPhones.id:eq')) )  selected='selected' @endif
                                    >{{ $list_item }}</option>
                                @endforeach
                                </select>
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_company_addresses_id_eq" class="col-sm-2 col-form-label col-form-label-sm">DIRECCIONES DE EMPRESAS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_company_addresses_id_eq" name="q[companyAddresses.id:eq]" type="search" value="{{ @(Request::input('q.companyAddresses.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_company_addresses_id_eq"
                                    name="q[companyAddresses.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["CompanyAddress"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.companyAddresses.id:eq')) )  selected='selected' @endif
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
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_company_legal_responsabilities_id_eq" class="col-sm-2 col-form-label col-form-label-sm">RESPONSABILIDADES LEGALES<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_company_legal_responsabilities_id_eq" name="q[companyLegalResponsabilities.id:eq]" type="search" value="{{ @(Request::input('q.companyLegalResponsabilities.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_company_legal_responsabilities_id_eq"
                                    name="q[companyLegalResponsabilities.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["CompanyLegalResponsability"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.companyLegalResponsabilities.id:eq')) )  selected='selected' @endif
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

                      @include('companies._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
