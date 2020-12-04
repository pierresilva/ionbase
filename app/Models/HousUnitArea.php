<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class HousUnitArea extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['hous_unit_id','name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(HousUnitArea $hous_unit_area=null){
        $ignore_unique = null;
        if($hous_unit_area){
            $ignore_unique = $hous_unit_area->id;
        }
        $table_name = 'hous_unit_areas';
        $validation_rule = [

            'model.hous_unit_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($hous_unit_area){

        }
        return $validation_rule;
    }

	public function operSchedules() {
		return $this->hasMany('App\Models\OperSchedule');
	}

	public function housUnit() {
		return $this->belongsTo('App\Models\HousUnit');
	}


    public static function getRelationships()
    {
        return [
            'housUnit',
            'operSchedules',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnit'] = HousUnit::all();
		$lists['OperSchedule'] = OperSchedule::all();
		return $lists;
	}

    public function scopeHousUnitByName(Builder $query, $name)
    {
        return $query->whereHas('housUnit', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperSchedulesByName(Builder $query, $name)
    {
        return $query->whereHas('operSchedules', function ($query) use ($name) {
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
