<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{

// generated section

	// Mass Assignment
	protected $fillable = ['syst_position_id','name','email','password',];

	// Validate Rule
    public static function getValidateRule(User $user=null){
        $ignore_unique = null;
        if($user){
            $ignore_unique = $user->id;
        }
        $table_name = 'users';
        $validation_rule = [

            'model.syst_position_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.email' => 'required|unique:'.$table_name.',email,'.$ignore_unique.',id',
            'model.password' => 'required',


        ];
        if($user){

        }
        return $validation_rule;
    }

	public function userProfiles() {
		return $this->hasMany('App\Models\UserProfile');
	}
	public function counMeetingCitations() {
		return $this->hasMany('App\Models\CounMeetingCitation');
	}
	public function counMembers() {
		return $this->hasMany('App\Models\CounMember');
	}

	public function systPosition() {
		return $this->belongsTo('App\Models\SystPosition');
	}


    public static function getRelationships()
    {
        return [
            'systPosition',
            'userProfiles',
            'counMeetingCitations',
            'counMembers',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['SystPosition'] = SystPosition::all();
		$lists['UserProfile'] = UserProfile::all();
		$lists['CounMeetingCitation'] = CounMeetingCitation::all();
		$lists['CounMember'] = CounMember::all();
		return $lists;
	}

    public function scopeSystPositionByName(Builder $query, $name)
    {
        return $query->whereHas('systPosition', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeUserProfilesByName(Builder $query, $name)
    {
        return $query->whereHas('userProfiles', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCounMeetingCitationsByName(Builder $query, $name)
    {
        return $query->whereHas('counMeetingCitations', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCounMembersByName(Builder $query, $name)
    {
        return $query->whereHas('counMembers', function ($query) use ($name) {
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
