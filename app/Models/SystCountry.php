<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


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
