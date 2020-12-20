<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CounMeeting
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string|null $description
 * @property string $date
 * @property string|null $place
 * @property string|null $url
 * @property string|null $act
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string|null $hour Hora de la junta
 * @property string|null $status
 * @property string|null $start_content
 * @property string|null $end_content
 * @property string|null $consecutive
 * @property string|null $type
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CounMeetingAgenda[] $counMeetingAgendas
 * @property-read int|null $coun_meeting_agendas_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CounMeetingCitation[] $counMeetingCitations
 * @property-read int|null $coun_meeting_citations_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\File[] $files
 * @property-read int|null $files_count
 * @method static Builder|CounMeeting counMeetingAgendasByName($name)
 * @method static Builder|CounMeeting counMeetingCitationsByName($name)
 * @method static Builder|CounMeeting newModelQuery()
 * @method static Builder|CounMeeting newQuery()
 * @method static \Illuminate\Database\Query\Builder|CounMeeting onlyTrashed()
 * @method static Builder|CounMeeting query()
 * @method static Builder|CounMeeting whereAct($value)
 * @method static Builder|CounMeeting whereConsecutive($value)
 * @method static Builder|CounMeeting whereCreatedAt($value)
 * @method static Builder|CounMeeting whereDate($value)
 * @method static Builder|CounMeeting whereDeletedAt($value)
 * @method static Builder|CounMeeting whereDescription($value)
 * @method static Builder|CounMeeting whereEndContent($value)
 * @method static Builder|CounMeeting whereHour($value)
 * @method static Builder|CounMeeting whereId($value)
 * @method static Builder|CounMeeting whereName($value)
 * @method static Builder|CounMeeting wherePlace($value)
 * @method static Builder|CounMeeting whereStartContent($value)
 * @method static Builder|CounMeeting whereStatus($value)
 * @method static Builder|CounMeeting whereType($value)
 * @method static Builder|CounMeeting whereUpdatedAt($value)
 * @method static Builder|CounMeeting whereUrl($value)
 * @method static \Illuminate\Database\Query\Builder|CounMeeting withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CounMeeting withoutTrashed()
 * @mixin \Eloquent
 */
class CounMeeting extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','description','date','hour','place','url','act','status','start_content','end_content','consecutive','type',];
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
            'model.status' => 'nullable',
            'model.start_content' => 'nullable',
            'model.end_content' => 'nullable',
            'model.consecutive' => 'nullable',
            'model.type' => 'nullable',


        ];
        if($coun_meeting){

        }
        return $validation_rule;
    }

	public function counMeetingAgendas() {
		return $this->hasMany('App\Models\CounMeetingAgenda')->orderBy('order');
	}
	public function counMeetingCitations() {
		return $this->hasMany('App\Models\CounMeetingCitation');
	}



    public static function getRelationships()
    {
        return [
            'counMeetingAgendas',
            'counMeetingCitations',
            'files'
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

    public function files()
    {
        return $this->morphMany('App\Models\File', 'fileable', 'fileable_type', 'fileable_id');
    }

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
