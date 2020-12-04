@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>

                  @if ( $query_params = Request::input('q') )

                      <li class="breadcrumb-item active"><a href="{{ route('operContractors.index') }}">{{ $model_title_list['operContractors'] }}</a></li>
                      <li class="breadcrumb-item active">condition(
                      @foreach( $query_params as $key => $value )
                          @if (!$loop->first) / @endif {{ $key }} : {{ $value }}
                      @endforeach
                      )</li>
                  @else
                      <li class="breadcrumb-item active">{{ $model_title_list['operContractors'] }}</li>
                  @endif

                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">view_headline</i>
                          <span class="d-inline-block">{{ $model_title_list['operContractors'] }}</span>
                          <a class="btn btn-success d-inline-flex ml-auto" href="{{ route('operContractors.create') }}"><i class="material-icons align-self-center mr-1">add_circle</i><span class="align-self-center">Create</span></a>
                      </h1>

                      <p><button class="btn btn-primary btn-sm" type="button" data-toggle="collapse" data-target="#search-area" aria-expanded="false" aria-controls="search-area">Search</button></p>
                      <div class="collapse mb-4" id="search-area">
                        <div class="card card-body">

                          <form id="search" action="{{ route('operContractors.index') }}" accept-charset="UTF-8" method="get">
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
                              <label for="q_document_cont" class="col-sm-2 col-form-label col-form-label-sm">DOCUMENTO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_document_cont" name="q[document:cont]" type="search" value="{{ @(Request::input('q.document:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_address_cont" class="col-sm-2 col-form-label col-form-label-sm">DIRECCIÓN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_address_cont" name="q[address:cont]" type="search" value="{{ @(Request::input('q.address:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_phone_cont" class="col-sm-2 col-form-label col-form-label-sm">TELÉFONO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_phone_cont" name="q[phone:cont]" type="search" value="{{ @(Request::input('q.phone:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_email_cont" class="col-sm-2 col-form-label col-form-label-sm">CORREO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_email_cont" name="q[email:cont]" type="search" value="{{ @(Request::input('q.email:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_phone_support_cont" class="col-sm-2 col-form-label col-form-label-sm">TELÉFONO DE SOPORTE</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_phone_support_cont" name="q[phone_support:cont]" type="search" value="{{ @(Request::input('q.phone_support:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_email_support_cont" class="col-sm-2 col-form-label col-form-label-sm">CORREO DE SOPORTE</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_email_support_cont" name="q[email_support:cont]" type="search" value="{{ @(Request::input('q.email_support:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_contact_cont" class="col-sm-2 col-form-label col-form-label-sm">CONTACTO</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_contact_cont" name="q[contact:cont]" type="search" value="{{ @(Request::input('q.contact:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_business_hour_cont" class="col-sm-2 col-form-label col-form-label-sm">HORARIO DE ATENCIÓN</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_business_hour_cont" name="q[business_hour:cont]" type="search" value="{{ @(Request::input('q.business_hour:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_phone_emergency_cont" class="col-sm-2 col-form-label col-form-label-sm">TELÉFONO DE EMERGENCIA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_phone_emergency_cont" name="q[phone_emergency:cont]" type="search" value="{{ @(Request::input('q.phone_emergency:cont')) }}">
                              </div>
                            </div>
                                                                                                                                                                        <div class="form-group row">
                              <label for="q_email_emergency_cont" class="col-sm-2 col-form-label col-form-label-sm">CORREO DE EMERGENCIA</label>
                              <div class="col-sm-10">
                                <input class="form-control form-control-sm" id="q_email_emergency_cont" name="q[email_emergency:cont]" type="search" value="{{ @(Request::input('q.email_emergency:cont')) }}">
                              </div>
                            </div>
                                                                                    
                                                                                                                <div class="form-group row">
                              <label for="q_oper_movements_id_eq" class="col-sm-2 col-form-label col-form-label-sm">MOVIMIENTOS OPERATIVOS<br>hasMany</label>
                              <div class="col-sm-10">
                                {{--<input class="form-control form-control-sm" id="q_oper_movements_id_eq" name="q[operMovements.id:eq]" type="search" value="{{ @(Request::input('q.operMovements.id:eq')) }}">--}}
                                <select class="form-control"
                                    id="q_oper_movements_id_eq"
                                    name="q[operMovements.id:eq]">
                                <option value=""></option>
                                @foreach( $lists["OperMovement"] as $list_key => $list_item )
                                    <option value="{{ $list_key }}"
                                    @if( $list_key == @(Request::input('q.operMovements.id:eq')) )  selected='selected' @endif
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

                      @include('operContractors._table')
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
