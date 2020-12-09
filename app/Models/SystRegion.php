<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\SystRegion
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property int|null $syst_country_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SystCity[] $systCities
 * @property-read int|null $syst_cities_count
 * @property-read \App\Models\SystCountry|null $systCountry
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\UserProfile[] $userProfiles
 * @property-read int|null $user_profiles_count
 * @method static Builder|SystRegion newModelQuery()
 * @method static Builder|SystRegion newQuery()
 * @method static \Illuminate\Database\Query\Builder|SystRegion onlyTrashed()
 * @method static Builder|SystRegion query()
 * @method static Builder|SystRegion systCitiesByName($name)
 * @method static Builder|SystRegion systCountryByName($name)
 * @method static Builder|SystRegion userProfilesByName($name)
 * @method static Builder|SystRegion whereCode($value)
 * @method static Builder|SystRegion whereCreatedAt($value)
 * @method static Builder|SystRegion whereDeletedAt($value)
 * @method static Builder|SystRegion whereId($value)
 * @method static Builder|SystRegion whereName($value)
 * @method static Builder|SystRegion whereSystCountryId($value)
 * @method static Builder|SystRegion whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|SystRegion withTrashed()
 * @method static \Illuminate\Database\Query\Builder|SystRegion withoutTrashed()
 * @mixin \Eloquent
 */
class SystRegion extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code','syst_country_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystRegion $syst_region=null){
        $ignore_unique = null;
        if($syst_region){
            $ignore_unique = $syst_region->id;
        }
        $table_name = 'syst_regions';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',
            'model.syst_country_id' => 'integer|nullable',


        ];
        if($syst_region){

        }
        return $validation_rule;
    }

	public function userProfiles() {
		return $this->hasMany('App\Models\UserProfile');
	}
	public function systCities() {
		return $this->hasMany('App\Models\SystCity');
	}

	public function systCountry() {
		return $this->belongsTo('App\Models\SystCountry');
	}


    public static function getRelationships()
    {
        return [
            'userProfiles',
            'systCities',
            'systCountry',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['UserProfile'] = UserProfile::all();
		$lists['SystCity'] = SystCity::all();
		$lists['SystCountry'] = SystCountry::all();
		return $lists;
	}

    public function scopeUserProfilesByName(Builder $query, $name)
    {
        return $query->whereHas('userProfiles', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystCitiesByName(Builder $query, $name)
    {
        return $query->whereHas('systCities', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystCountryByName(Builder $query, $name)
    {
        return $query->whereHas('systCountry', function ($query) use ($name) {
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
