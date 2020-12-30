<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperMachine extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','hous_unit_area_id','oper_contractor_id','contract_expiration_date','contract_monthly_price','monthly_periodicity',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperMachine $oper_machine=null){
        if($oper_machine){
            $ignore_unique = $oper_machine->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_machines';
        $validation_rule = [

            'model.name' => 'required',
            'model.hous_unit_area_id' => 'integer|nullable',
            'model.oper_contractor_id' => 'integer|nullable',
            'model.contract_expiration_date' => 'nullable',
            'model.contract_monthly_price' => 'integer|nullable',
            'model.monthly_periodicity' => 'integer|nullable',


        ];
        if($oper_machine){

        }
        return $validation_rule;
    }

	public function operPreventiveMaintenances() {
		return $this->hasMany('App\Models\OperPreventiveMaintenance');
	}
	public function operReplacements() {
		return $this->hasMany('App\Models\OperReplacement');
	}


	public function housUnitArea() {
		return $this->belongsTo('App\Models\HousUnitArea');
	}
	public function operContractor() {
		return $this->belongsTo('App\Models\OperContractor');
	}



    public static function getRelationships()
    {
        return [
            'housUnitArea',
            'operContractor',
            'operPreventiveMaintenances',
            'operReplacements',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnitArea'] = HousUnitArea::all();
		$lists['OperContractor'] = OperContractor::all();
		$lists['OperPreventiveMaintenance'] = OperPreventiveMaintenance::all();
		$lists['OperReplacement'] = OperReplacement::all();
		return $lists;
	}

    public function scopeHousUnitAreaByName(Builder $query, $name)
    {
        return $query->whereHas('housUnitArea', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperContractorByName(Builder $query, $name)
    {
        return $query->whereHas('operContractor', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperPreventiveMaintenancesByName(Builder $query, $name)
    {
        return $query->whereHas('operPreventiveMaintenances', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperReplacementsByName(Builder $query, $name)
    {
        return $query->whereHas('operReplacements', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }


// end section

    public function setContractExpirationDateAttribute( $value ) {
        $this->attributes['contract_expiration_date'] = (new Carbon($value))->format('Y-m-d');
    }

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
