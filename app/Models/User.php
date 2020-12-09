<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string|null $email_verified_at
 * @property string $password
 * @property int|null $syst_position_id
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CounMeetingCitation[] $counMeetingCitations
 * @property-read int|null $coun_meeting_citations_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CounMember[] $counMembers
 * @property-read int|null $coun_members_count
 * @property-read \App\Models\SystPosition|null $systPosition
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\UserProfile[] $userProfiles
 * @property-read int|null $user_profiles_count
 * @method static Builder|User counMeetingCitationsByName($name)
 * @method static Builder|User counMembersByName($name)
 * @method static Builder|User newModelQuery()
 * @method static Builder|User newQuery()
 * @method static Builder|User query()
 * @method static Builder|User systPositionByName($name)
 * @method static Builder|User userProfilesByName($name)
 * @method static Builder|User whereCreatedAt($value)
 * @method static Builder|User whereEmail($value)
 * @method static Builder|User whereEmailVerifiedAt($value)
 * @method static Builder|User whereId($value)
 * @method static Builder|User whereName($value)
 * @method static Builder|User wherePassword($value)
 * @method static Builder|User whereRememberToken($value)
 * @method static Builder|User whereSystPositionId($value)
 * @method static Builder|User whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property int|null $accept_terms_conditions
 * @property string|null $first_name
 * @property string|null $last_name
 * @method static Builder|User whereAcceptTermsConditions($value)
 * @method static Builder|User whereFirstName($value)
 * @method static Builder|User whereLastName($value)
 */
class User extends Model
{

// generated section

	// Mass Assignment
	protected $fillable = ['syst_position_id','name','email','password','first_name','last_name','accept_terms_condition',];

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
            'model.first_name' => 'nullable',
            'model.last_name' => 'nullable',
            'model.accept_terms_condition' => 'nullable',


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
