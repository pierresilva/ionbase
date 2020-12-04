<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CounMeeting extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','description','date','hour','place','url','act','status'];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CounMeeting $coun_meeting=null){
        $ignore_unique = null;
        if($coun_meeting){
            $ignore_unique = $coun_meeting->id;
        }
        $table_name = 'coun_meetings';
        $validation_rule = [

            'model.name' => 'required',
            'model.description' => 'nullable',
            'model.date' => 'required',
            'model.hour' => 'nullable',
            'model.place' => 'nullable',
            'model.url' => 'nullable',
            'model.act' => 'nullable',


        ];
        if($coun_meeting){

        }
        return $validation_rule;
    }

	public function counMeetingAgendas() {
		return $this->hasMany('App\Models\CounMeetingAgenda')->orderBy('order', 'asc');
	}
	public function counMeetingCitations() {
		return $this->hasMany('App\Models\CounMeetingCitation');
	}



    public static function getRelationships()
    {
        return [
            'counMeetingAgendas',
            'counMeetingCitations',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['CounMeetingAgenda'] = CounMeetingAgenda::all();
		$lists['CounMeetingCitation'] = CounMeetingCitation::all();
		return $lists;
	}

    public function scopeCounMeetingAgendasByName(Builder $query, $name)
    {
        return $query->whereHas('counMeetingAgendas', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCounMeetingCitationsByName(Builder $query, $name)
    {
        return $query->whereHas('counMeetingCitations', function ($query) use ($name) {
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
