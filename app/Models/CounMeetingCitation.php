<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CounMeetingCitation
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $coun_meeting_id
 * @property int|null $coun_member_id
 * @property string $name
 * @property int|null $attended
 * @property int|null $signed
 * @property string|null $signature
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property int|null $user_id
 * @property-read \App\Models\CounMeeting|null $counMeeting
 * @property-read \App\Models\CounMember|null $counMember
 * @property-read \App\Models\User|null $user
 * @method static Builder|CounMeetingCitation counMeetingByName($name)
 * @method static Builder|CounMeetingCitation counMemberByName($name)
 * @method static Builder|CounMeetingCitation newModelQuery()
 * @method static Builder|CounMeetingCitation newQuery()
 * @method static \Illuminate\Database\Query\Builder|CounMeetingCitation onlyTrashed()
 * @method static Builder|CounMeetingCitation query()
 * @method static Builder|CounMeetingCitation userByName($name)
 * @method static Builder|CounMeetingCitation whereAttended($value)
 * @method static Builder|CounMeetingCitation whereCounMeetingId($value)
 * @method static Builder|CounMeetingCitation whereCounMemberId($value)
 * @method static Builder|CounMeetingCitation whereCreatedAt($value)
 * @method static Builder|CounMeetingCitation whereDeletedAt($value)
 * @method static Builder|CounMeetingCitation whereId($value)
 * @method static Builder|CounMeetingCitation whereName($value)
 * @method static Builder|CounMeetingCitation whereSignature($value)
 * @method static Builder|CounMeetingCitation whereSigned($value)
 * @method static Builder|CounMeetingCitation whereUpdatedAt($value)
 * @method static Builder|CounMeetingCitation whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|CounMeetingCitation withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CounMeetingCitation withoutTrashed()
 * @mixin \Eloquent
 */
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
