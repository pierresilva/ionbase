<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Post extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','summary','user_id','category_id','published','from_date','to_date','accepted','promotion_date','promotion_image','content','code','status',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Post $post=null){
        $ignore_unique = null;
        if($post){
            $ignore_unique = $post->id;
        }
        $table_name = 'posts';
        $validation_rule = [

            'model.name' => 'required|min:8|max:32',
            'model.summary' => 'required',
            'model.user_id' => 'integer|required',
            'model.category_id' => 'integer|required',
            'model.published' => 'nullable|boolean',
            'model.from_date' => 'nullable|before:model.to_date',
            'model.to_date' => 'nullable|after:model.from_date',
            'model.accepted' => 'nullable',
            'model.promotion_date' => 'nullable|date',
            'model.promotion_image' => 'nullable|url',
            'model.content' => 'nullable',
            'model.code' => 'required|unique:'.$table_name.',code,'.$ignore_unique.',id,deleted_at,NOT_NULL',
            'model.status' => 'required',


        ];
        if($post){

        }
        return $validation_rule;
    }

	public function comments() {
		return $this->hasMany('App\Models\Comment');
	}

	public function user() {
		return $this->belongsTo('App\Models\User');
	}
	public function category() {
		return $this->belongsTo('App\Models\Category');
	}

	public function tags() {
		return $this->belongsToMany('App\Models\Tag')
		->orderBy('id')
		->withTimestamps();
	}
	public function images() {
		return $this->belongsToMany('App\Models\Image')
		->orderBy('id')
		->withTimestamps();
	}

    public static function getRelationships()
    {
        return [
            'user',
            'category',
            'tags',
            'comments',
            'images',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['User'] = User::all();
		$lists['Category'] = Category::all();
		$lists['Tag'] = Tag::all();
		$lists['Comment'] = Comment::all();
		$lists['Image'] = Image::all();
		return $lists;
	}

    public function scopeUserByName(Builder $query, $name)
    {
        return $query->whereHas('user', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCategoryByName(Builder $query, $name)
    {
        return $query->whereHas('category', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeTagsByName(Builder $query, $name)
    {
        return $query->whereHas('tags', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCommentsByName(Builder $query, $name)
    {
        return $query->whereHas('comments', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeImagesByName(Builder $query, $name)
    {
        return $query->whereHas('images', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }



// end section

    public static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            //
        });
        self::updating(function ($model) {
            //
        });
        self::deleting(function ($model) {
            //
        });
    }

}
