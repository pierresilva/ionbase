<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CounMember
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int|null $user_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CounMeetingCitation[] $counMeetingCitations
 * @property-read int|null $coun_meeting_citations_count
 * @property-read \App\Models\User|null $user
 * @method static Builder|CounMember counMeetingCitationsByName($name)
 * @method static Builder|CounMember newModelQuery()
 * @method static Builder|CounMember newQuery()
 * @method static \Illuminate\Database\Query\Builder|CounMember onlyTrashed()
 * @method static Builder|CounMember query()
 * @method static Builder|CounMember userByName($name)
 * @method static Builder|CounMember whereCreatedAt($value)
 * @method static Builder|CounMember whereDeletedAt($value)
 * @method static Builder|CounMember whereId($value)
 * @method static Builder|CounMember whereName($value)
 * @method static Builder|CounMember whereUpdatedAt($value)
 * @method static Builder|CounMember whereUserId($value)
 * @method static \Illuminate\Database\Query\Builder|CounMember withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CounMember withoutTrashed()
 * @mixin \Eloquent
 */
class CounMember extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','user_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CounMember $coun_member=null){
        $ignore_unique = null;
        if($coun_member){
            $ignore_unique = $coun_member->id;
        }
        $table_name = 'coun_members';
        $validation_rule = [

            'model.name' => 'required',
            'model.user_id' => 'integer|nullable',


        ];
        if($coun_member){

        }
        return $validation_rule;
    }

	public function counMeetingCitations() {
		return $this->hasMany('App\Models\CounMeetingCitation');
	}

	public function user() {
		return $this->belongsTo('App\Models\User');
	}


    public static function getRelationships()
    {
        return [
            'counMeetingCitations',
            'user',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['CounMeetingCitation'] = CounMeetingCitation::all();
		$lists['User'] = User::all();
		return $lists;
	}

    public function scopeCounMeetingCitationsByName(Builder $query, $name)
    {
        return $query->whereHas('counMeetingCitations', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeUserByName(Builder $query, $name)
    {
        return $query->whereHas('user', function ($query) use ($name) {
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
