<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tag extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Tag $tag=null){
        $ignore_unique = null;
        if($tag){
            $ignore_unique = $tag->id;
        }
        $table_name = 'tags';
        $validation_rule = [

            'model.name' => 'required',


        ];
        if($tag){

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
