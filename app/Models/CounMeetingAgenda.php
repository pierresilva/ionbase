<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CounMeetingAgenda extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','order','coun_meeting_id','content',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CounMeetingAgenda $coun_meeting_agenda=null){
        $ignore_unique = null;
        if($coun_meeting_agenda){
            $ignore_unique = $coun_meeting_agenda->id;
        }
        $table_name = 'coun_meeting_agendas';
        $validation_rule = [

            'model.name' => 'required',
            'model.order' => 'nullable',
            'model.coun_meeting_id' => 'integer|nullable',
            'model.content' => 'nullable',


        ];
        if($coun_meeting_agenda){

        }
        return $validation_rule;
    }


	public function counMeeting() {
		return $this->belongsTo('App\Models\CounMeeting');
	}


    public static function getRelationships()
    {
        return [
            'counMeeting',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['CounMeeting'] = CounMeeting::all();
		return $lists;
	}

    public function scopeCounMeetingByName(Builder $query, $name)
    {
        return $query->whereHas('counMeeting', function ($query) use ($name) {
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
