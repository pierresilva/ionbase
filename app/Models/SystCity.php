<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SystCity extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code','syst_region_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystCity $syst_city=null){
        $ignore_unique = null;
        if($syst_city){
            $ignore_unique = $syst_city->id;
        }
        $table_name = 'syst_cities';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',
            'model.syst_region_id' => 'integer|nullable',


        ];
        if($syst_city){

        }
        return $validation_rule;
    }

	public function userProfiles() {
		return $this->hasMany('App\Models\UserProfile');
	}
	public function compAddresses() {
		return $this->hasMany('App\Models\CompAddress');
	}

	public function systRegion() {
		return $this->belongsTo('App\Models\SystRegion');
	}


    public static function getRelationships()
    {
        return [
            'userProfiles',
            'systRegion',
            'compAddresses',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['UserProfile'] = UserProfile::all();
		$lists['SystRegion'] = SystRegion::all();
		$lists['CompAddress'] = CompAddress::all();
		return $lists;
	}

    public function scopeUserProfilesByName(Builder $query, $name)
    {
        return $query->whereHas('userProfiles', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystRegionByName(Builder $query, $name)
    {
        return $query->whereHas('systRegion', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCompAddressesByName(Builder $query, $name)
    {
        return $query->whereHas('compAddresses', function ($query) use ($name) {
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
