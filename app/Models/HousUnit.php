<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class HousUnit extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(HousUnit $hous_unit=null){
        $ignore_unique = null;
        if($hous_unit){
            $ignore_unique = $hous_unit->id;
        }
        $table_name = 'hous_units';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($hous_unit){

        }
        return $validation_rule;
    }

	public function housUnitAreas() {
		return $this->hasMany('App\Models\HousUnitArea');
	}
	public function operSectors() {
		return $this->hasMany('App\Models\OperSector');
	}



    public static function getRelationships()
    {
        return [
            'housUnitAreas',
            'operSectors',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnitArea'] = HousUnitArea::all();
		$lists['OperSector'] = OperSector::all();
		return $lists;
	}

    public function scopeHousUnitAreasByName(Builder $query, $name)
    {
        return $query->whereHas('housUnitAreas', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperSectorsByName(Builder $query, $name)
    {
        return $query->whereHas('operSectors', function ($query) use ($name) {
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
