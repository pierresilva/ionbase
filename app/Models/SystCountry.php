<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\SystCountry
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SystRegion[] $systRegions
 * @property-read int|null $syst_regions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\UserProfile[] $userProfiles
 * @property-read int|null $user_profiles_count
 * @method static Builder|SystCountry newModelQuery()
 * @method static Builder|SystCountry newQuery()
 * @method static \Illuminate\Database\Query\Builder|SystCountry onlyTrashed()
 * @method static Builder|SystCountry query()
 * @method static Builder|SystCountry systRegionsByName($name)
 * @method static Builder|SystCountry userProfilesByName($name)
 * @method static Builder|SystCountry whereCode($value)
 * @method static Builder|SystCountry whereCreatedAt($value)
 * @method static Builder|SystCountry whereDeletedAt($value)
 * @method static Builder|SystCountry whereId($value)
 * @method static Builder|SystCountry whereName($value)
 * @method static Builder|SystCountry whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|SystCountry withTrashed()
 * @method static \Illuminate\Database\Query\Builder|SystCountry withoutTrashed()
 * @mixin \Eloquent
 */
class SystCountry extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystCountry $syst_country=null){
        $ignore_unique = null;
        if($syst_country){
            $ignore_unique = $syst_country->id;
        }
        $table_name = 'syst_countries';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($syst_country){

        }
        return $validation_rule;
    }

	public function userProfiles() {
		return $this->hasMany('App\Models\UserProfile');
	}
	public function systRegions() {
		return $this->hasMany('App\Models\SystRegion');
	}



    public static function getRelationships()
    {
        return [
            'userProfiles',
            'systRegions',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['UserProfile'] = UserProfile::all();
		$lists['SystRegion'] = SystRegion::all();
		return $lists;
	}

    public function scopeUserProfilesByName(Builder $query, $name)
    {
        return $query->whereHas('userProfiles', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystRegionsByName(Builder $query, $name)
    {
        return $query->whereHas('systRegions', function ($query) use ($name) {
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
