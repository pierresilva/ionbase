<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserRole extends Model
{
    // use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(UserRole $user_role=null){
        if($user_role){
            $ignore_unique = $user_role->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'user_roles';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($user_role){

        }
        return $validation_rule;
    }





	public function users() {
		return $this->belongsToMany('App\Models\User')
		->orderBy('id')
		->withTimestamps();
	}
	public function userPermissions() {
		return $this->belongsToMany('App\Models\UserPermission')
		->orderBy('id')
		->withTimestamps();
	}

    public static function getRelationships()
    {
        return [
            'users',
            'userPermissions',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['User'] = User::all();
		$lists['UserPermission'] = UserPermission::all();
		return $lists;
	}

    public function scopeUsersByName(Builder $query, $name)
    {
        return $query->whereHas('users', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeUserPermissionsByName(Builder $query, $name)
    {
        return $query->whereHas('userPermissions', function ($query) use ($name) {
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
