
<div class="form-group">
  <label for="name-field">NOMBRE</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.name")) is-invalid @else is-valid @endif @endif;
  " id="name-field" name="model[name]" value="
@if(isset($post))
@if($errors->any()){{ old('model.name') }}@else{{ $post->name ?? '' }}@endif
@endif" required>

  @if($errors->has("model.name"))
    <div class="invalid-feedback">{{ $errors->first("model.name") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="summary-field">RESUMEN</label>

  <textarea class="form-control
  @if($errors->any()) @if($errors->has("model.summary")) is-invalid @else is-valid @endif @endif;
  " id="summary-field" name="model[summary]" rows="3" required>
@if(isset($post))
@if($errors->any()){{ old('model.summary') }}@else{{ $post->summary ?? '' }}@endif
@endif</textarea>

  @if($errors->has("model.summary"))
    <div class="invalid-feedback">{{ $errors->first("model.summary") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="published-field">PUBLICADO</label>


  @if($errors->has("model.published"))
    <div class="invalid-feedback">{{ $errors->first("model.published") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="from_date-field">DESDE</label>


  @if($errors->has("model.from_date"))
    <div class="invalid-feedback">{{ $errors->first("model.from_date") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="to_date-field">HASTA</label>


  @if($errors->has("model.to_date"))
    <div class="invalid-feedback">{{ $errors->first("model.to_date") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="accepted-field">ACEPTADO</label>


  @if($errors->has("model.accepted"))
    <div class="invalid-feedback">{{ $errors->first("model.accepted") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="promotion_date-field">FECHA DE PROMICIÓN</label>


  @if($errors->has("model.promotion_date"))
    <div class="invalid-feedback">{{ $errors->first("model.promotion_date") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="promotion_image-field">IMÁGEN PROMOCIÓN</label>


  @if($errors->has("model.promotion_image"))
    <div class="invalid-feedback">{{ $errors->first("model.promotion_image") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="content-field">CONTENIDO</label>


  @if($errors->has("model.content"))
    <div class="invalid-feedback">{{ $errors->first("model.content") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="code-field">CÓDIGO</label>

  <input type="text" class="form-control
  @if($errors->any()) @if($errors->has("model.code")) is-invalid @else is-valid @endif @endif;
  " id="code-field" name="model[code]" value="
@if(isset($post))
@if($errors->any()){{ old('model.code') }}@else{{ $post->code ?? '' }}@endif
@endif" required>

  @if($errors->has("model.code"))
    <div class="invalid-feedback">{{ $errors->first("model.code") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="status-field">ESTADO</label>


  @if($errors->has("model.status"))
    <div class="invalid-feedback">{{ $errors->first("model.status") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>






<div class="form-group">
  <label for="user_id-field">USUARIOS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.user_id")) is-invalid @else is-valid @endif @endif
  " id="user_id-field" name="model[user_id]">
    <option value=""></option>
  @foreach( $lists["User"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('user_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($post) && $post->user_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.user_id"))
    <div class="invalid-feedback">{{ $errors->first("model.user_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>


<div class="form-group">
  <label for="category_id-field">CATEGORÍAS</label>

  <select class="form-control
  @if($errors->any()) @if($errors->has("model.category_id")) is-invalid @else is-valid @endif @endif
  " id="category_id-field" name="model[category_id]">
    <option value=""></option>
  @foreach( $lists["Category"] as $list_key => $list_item )
    <option value="{{ $list_key }}"
      @if($errors->any())
        @if( old('category_id') == $list_key ) selected='selected' @endif
      @else
        @if( isset($post) && $post->category_id==$list_key )  selected='selected' @endif
      @endif
   >{{ $list_item }}</option>
  @endforeach
  </select>
  @if($errors->has("model.category_id"))
    <div class="invalid-feedback">{{ $errors->first("model.category_id") }}</div>
  @else
    <div class="invalid-feedback">Invalid!</div>
  @endif
</div>





<div class="form-group manytomany">
    <label for="pivotspostCheckbox">ETIQUETAS</label>
    <div class="form-check form-check-inline flex-wrap">
        @foreach($lists['Tag'] as $list_key => $list_item)
        <div class="form-group mb-1">
          <input name="pivots[tag][{{ $list_key }}][id]" type="checkbox" id="pivotsTagCheckbox{{ $list_key }}" value="{{ $list_key }}" class="form-check-input manytomany-trigger
              @if($errors->has('pivots.tag.'.$list_key.'.*')) is-invalid @endif
              "
              @if( $errors->any() && old('pivots.tag.'.$list_key.'.id')) checked
              @elseif( !$errors->any() && isset($post) && $post->tags->find($list_key) ) checked
              @endif
          ><label class="form-check-label mr-2" for="pivotsTagCheckbox{{ $list_key }}">{{ $list_item }}</label>
        </div>
        @endforeach
    </div>
    @if ($errors->has('pivots.post.*.*'))
    <div><span class="text-danger">There were some problems with your pivot input.</span></div>
    @endif

    <!-- manytomany Modal -->
    <div class="modal fade manytomany-modal needs-validation-with-save" id="tagModal" tabindex="-1" role="dialog" aria-labelledby="tagModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Tag Option</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary save">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    @if( old('pivots.tag') )
        @foreach( old('pivots.tag') as $tag_id => $tag )
            @foreach( $tag as $pivot_key => $pivot_value )
                @if( $loop->index > 0 )
                    <input type="hidden" name="pivots[tag][{{ $tag_id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[tag][{{ $tag_id }}]">
                @endif
            @endforeach
        @endforeach
    @elseif( isset($post) )
        @foreach( $post->tags as $tag )
            @foreach( $tag->pivot->toArray() as $pivot_key => $pivot_value )
                @if( $loop->index > 1 && $pivot_key !== 'created_at' && $pivot_key !== 'updated_at')
                    <input type="hidden" name="pivots[tag][{{ $tag->id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[tag][{{ $tag->id }}]">
                @endif
            @endforeach
        @endforeach
    @endif
    @if($errors->has('pivots.tag.*.*'))
        @foreach($errors->get('pivots.tag.*') as $error_key => $error_value)
                    <input type="hidden" name="errors.{{$error_key}}" value="{{$error_value[0]}}" disabled="disabled">
        @endforeach
    @endif

</div>


<div class="form-group manytomany">
    <label for="pivotspostCheckbox">IMÁGENES</label>
    <div class="form-check form-check-inline flex-wrap">
        @foreach($lists['Image'] as $list_key => $list_item)
        <div class="form-group mb-1">
          <input name="pivots[image][{{ $list_key }}][id]" type="checkbox" id="pivotsImageCheckbox{{ $list_key }}" value="{{ $list_key }}" class="form-check-input manytomany-trigger
              @if($errors->has('pivots.image.'.$list_key.'.*')) is-invalid @endif
              "
              @if( $errors->any() && old('pivots.image.'.$list_key.'.id')) checked
              @elseif( !$errors->any() && isset($post) && $post->images->find($list_key) ) checked
              @endif
          ><label class="form-check-label mr-2" for="pivotsImageCheckbox{{ $list_key }}">{{ $list_item }}</label>
        </div>
        @endforeach
    </div>
    @if ($errors->has('pivots.post.*.*'))
    <div><span class="text-danger">There were some problems with your pivot input.</span></div>
    @endif

    <!-- manytomany Modal -->
    <div class="modal fade manytomany-modal needs-validation-with-save" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Image Option</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary save">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    @if( old('pivots.image') )
        @foreach( old('pivots.image') as $image_id => $image )
            @foreach( $image as $pivot_key => $pivot_value )
                @if( $loop->index > 0 )
                    <input type="hidden" name="pivots[image][{{ $image_id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[image][{{ $image_id }}]">
                @endif
            @endforeach
        @endforeach
    @elseif( isset($post) )
        @foreach( $post->images as $image )
            @foreach( $image->pivot->toArray() as $pivot_key => $pivot_value )
                @if( $loop->index > 1 && $pivot_key !== 'created_at' && $pivot_key !== 'updated_at')
                    <input type="hidden" name="pivots[image][{{ $image->id }}][{{$pivot_key}}]" value="{{$pivot_value}}" parent_name="pivots[image][{{ $image->id }}]">
                @endif
            @endforeach
        @endforeach
    @endif
    @if($errors->has('pivots.image.*.*'))
        @foreach($errors->get('pivots.image.*') as $error_key => $error_value)
                    <input type="hidden" name="errors.{{$error_key}}" value="{{$error_value[0]}}" disabled="disabled">
        @endforeach
    @endif

</div>

