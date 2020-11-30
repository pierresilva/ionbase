<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Comment extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','body','post_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Comment $comment=null){
        $ignore_unique = null;
        if($comment){
            $ignore_unique = $comment->id;
        }
        $table_name = 'comments';
        $validation_rule = [

            'model.name' => 'required',
            'model.body' => 'required',
            'model.post_id' => 'integer|nullable',


        ];
        if($comment){

        }
        return $validation_rule;
    }


	public function post() {
		return $this->belongsTo('App\Models\Post');
	}


    public static function getRelationships()
    {
        return [
            'post',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Post'] = Post::all();
		return $lists;
	}

    public function scopePostByName(Builder $query, $name)
    {
        return $query->whereHas('post', function ($query) use ($name) {
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
