<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{

// generated section

	// Mass Assignment
	protected $fillable = ['name','email','password',];

	// Validate Rule
    public static function getValidateRule(User $user=null){
        $ignore_unique = null;
        if($user){
            $ignore_unique = $user->id;
        }
        $table_name = 'users';
        $validation_rule = [

            'model.name' => 'required',
            'model.email' => 'required|unique:'.$table_name.',email,'.$ignore_unique.',id',
            'model.password' => 'required',


        ];
        if($user){

        }
        return $validation_rule;
    }

	public function posts() {
		return $this->hasMany('App\Models\Post');
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
