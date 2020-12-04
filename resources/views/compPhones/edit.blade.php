@extends('layouts.de_app')

@section('content')
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="/" class="d-inline-flex"><i class="material-icons mr-1">home</i> Home</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('compPhones.index') }}">{{ $model_title_list['compPhones'] }}</a></li>
                  <li class="breadcrumb-item"><a href="{{ route('compPhones.show', $compPhone->id) }}">{{ $compPhone->id }}</a></li>
                  <li class="breadcrumb-item active">Edit</li>
                </ol>
              </nav>
              <div class="card">
                  <div class="card-body">
                      <h1 class="d-flex mb-3">
                          <i class="material-icons align-self-center mr-1">edit</i>
                          <span class="d-inline-block">{{ $model_title_list['compPhones'] }} / Edit #{{$compPhone->id}}</span>
                      </h1> 

                      <div class="row">
                        <div class="col-md-12">
                          <form method="POST" action="{{ route('compPhones.update', $compPhone->id) }}" accept-charset="UTF-8" class="needs-validation" novalidate>
                          
                            {{ method_field('PUT') }}
                            {{ csrf_field() }}

                  @include('compPhones._form', ['mode' => 'edit'])

                            <div class="d-flex justify-content-end">
                              <a class="btn btn-secondary d-inline-flex mr-3" href="{{ route('compPhones.index') }}"><i class="material-icons mr-1">fast_rewind</i> Back</a>
                              <button type="submit" class="btn btn-primary">Save</button>
                            </div>

                          </form>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection