<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserProfile extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','user_id','syst_city_id','syst_region_id','syst_country_id','address','phone','avatar',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(UserProfile $user_profile=null){
        $ignore_unique = null;
        if($user_profile){
            $ignore_unique = $user_profile->id;
        }
        $table_name = 'user_profiles';
        $validation_rule = [

            'model.name' => 'required|unique:'.$table_name.',name,'.$ignore_unique.',id,deleted_at,NOT_NULL',
            'model.user_id' => 'integer|nullable',
            'model.syst_city_id' => 'integer|nullable',
            'model.syst_region_id' => 'integer|nullable',
            'model.syst_country_id' => 'integer|nullable',
            'model.address' => 'nullable',
            'model.phone' => 'nullable',
            'model.avatar' => 'nullable',


        ];
        if($user_profile){

        }
        return $validation_rule;
    }


	public function user() {
		return $this->belongsTo('App\Models\User');
	}
	public function systCity() {
		return $this->belongsTo('App\Models\SystCity');
	}
	public function systRegion() {
		return $this->belongsTo('App\Models\SystRegion');
	}
	public function systCountry() {
		return $this->belongsTo('App\Models\SystCountry');
	}


    public static function getRelationships()
    {
        return [
            'user',
            'systCity',
            'systRegion',
            'systCountry',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['User'] = User::all();
		$lists['SystCity'] = SystCity::all();
		$lists['SystRegion'] = SystRegion::all();
		$lists['SystCountry'] = SystCountry::all();
		return $lists;
	}

    public function scopeUserByName(Builder $query, $name)
    {
        return $query->whereHas('user', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystCityByName(Builder $query, $name)
    {
        return $query->whereHas('systCity', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystRegionByName(Builder $query, $name)
    {
        return $query->whereHas('systRegion', function ($query) use ($name) {
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
