<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CounMeetingCitation extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['coun_meeting_id','user_id','coun_member_id','name','attended','signed','signature',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CounMeetingCitation $coun_meeting_citation=null){
        $ignore_unique = null;
        if($coun_meeting_citation){
            $ignore_unique = $coun_meeting_citation->id;
        }
        $table_name = 'coun_meeting_citations';
        $validation_rule = [

            'model.coun_meeting_id' => 'integer|nullable',
            'model.user_id' => 'integer|nullable',
            'model.coun_member_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.attended' => 'nullable',
            'model.signed' => 'nullable',
            'model.signature' => 'nullable',


        ];
        if($coun_meeting_citation){

        }
        return $validation_rule;
    }


	public function counMeeting() {
		return $this->belongsTo('App\Models\CounMeeting');
	}
	public function user() {
		return $this->belongsTo('App\Models\User');
	}
	public function counMember() {
		return $this->belongsTo('App\Models\CounMember');
	}


    public static function getRelationships()
    {
        return [
            'counMeeting',
            'user',
            'counMember',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['CounMeeting'] = CounMeeting::all();
		$lists['User'] = User::all();
		$lists['CounMember'] = CounMember::all();
		return $lists;
	}

    public function scopeCounMeetingByName(Builder $query, $name)
    {
        return $query->whereHas('counMeeting', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeUserByName(Builder $query, $name)
    {
        return $query->whereHas('user', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCounMemberByName(Builder $query, $name)
    {
        return $query->whereHas('counMember', function ($query) use ($name) {
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
