<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CounMeetingAgenda
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string|null $order
 * @property int|null $coun_meeting_id
 * @property string|null $content
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\CounMeeting|null $counMeeting
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\File[] $files
 * @property-read int|null $files_count
 * @method static Builder|CounMeetingAgenda counMeetingByName($name)
 * @method static Builder|CounMeetingAgenda newModelQuery()
 * @method static Builder|CounMeetingAgenda newQuery()
 * @method static \Illuminate\Database\Query\Builder|CounMeetingAgenda onlyTrashed()
 * @method static Builder|CounMeetingAgenda query()
 * @method static Builder|CounMeetingAgenda whereContent($value)
 * @method static Builder|CounMeetingAgenda whereCounMeetingId($value)
 * @method static Builder|CounMeetingAgenda whereCreatedAt($value)
 * @method static Builder|CounMeetingAgenda whereDeletedAt($value)
 * @method static Builder|CounMeetingAgenda whereId($value)
 * @method static Builder|CounMeetingAgenda whereName($value)
 * @method static Builder|CounMeetingAgenda whereOrder($value)
 * @method static Builder|CounMeetingAgenda whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|CounMeetingAgenda withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CounMeetingAgenda withoutTrashed()
 * @mixin \Eloquent
 */
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
            'files'
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

    public function files() {
        return $this->morphMany('App\Models\File', 'fileable');
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
