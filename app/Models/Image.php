<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Image extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','url',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Image $image=null){
        $ignore_unique = null;
        if($image){
            $ignore_unique = $image->id;
        }
        $table_name = 'images';
        $validation_rule = [

            'model.name' => 'required',
            'model.url' => 'url',


        ];
        if($image){

        }
        return $validation_rule;
    }



	public function posts() {
		return $this->belongsToMany('App\Models\Post')
		->orderBy('id')
		->withTimestamps();
	}

    public static function getRelationships()
    {
        return [
            'posts',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Post'] = Post::all();
		return $lists;
	}

    public function scopePostsByName(Builder $query, $name)
    {
        return $query->whereHas('posts', function ($query) use ($name) {
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
