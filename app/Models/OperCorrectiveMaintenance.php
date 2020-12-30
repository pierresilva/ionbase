<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperCorrectiveMaintenance extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','oper_reason_id','hous_unit_area_id','detail','date','time','reported_by','status',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperCorrectiveMaintenance $oper_corrective_maintenance=null){
        if($oper_corrective_maintenance){
            $ignore_unique = $oper_corrective_maintenance->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_corrective_maintenances';
        $validation_rule = [

            'model.name' => 'nullable',
            'model.oper_reason_id' => 'integer|nullable',
            'model.hous_unit_area_id' => 'integer|nullable',
            'model.detail' => 'nullable',
            'model.date' => 'nullable',
            'model.time' => 'nullable',
            'model.reported_by' => 'nullable',
            'model.status' => 'nullable',


        ];
        if($oper_corrective_maintenance){

        }
        return $validation_rule;
    }

	public function operMaintenanceRepairs() {
		return $this->hasMany('App\Models\OperMaintenanceRepair');
	}


	public function operReason() {
		return $this->belongsTo('App\Models\OperReason');
	}
	public function housUnitArea() {
		return $this->belongsTo('App\Models\HousUnitArea');
	}


	public function operItems() {
		return $this->belongsToMany('App\Models\OperItem')
		->orderBy('id')
		->withTimestamps();
	}

    public static function getRelationships()
    {
        return [
            'operReason',
            'housUnitArea',
            'operItems',
            'operMaintenanceRepairs',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperReason'] = OperReason::all();
		$lists['HousUnitArea'] = HousUnitArea::all();
		$lists['OperItem'] = OperItem::all();
		$lists['OperMaintenanceRepair'] = OperMaintenanceRepair::all();
		return $lists;
	}

    public function scopeOperReasonByName(Builder $query, $name)
    {
        return $query->whereHas('operReason', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeHousUnitAreaByName(Builder $query, $name)
    {
        return $query->whereHas('housUnitArea', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperItemsByName(Builder $query, $name)
    {
        return $query->whereHas('operItems', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperMaintenanceRepairsByName(Builder $query, $name)
    {
        return $query->whereHas('operMaintenanceRepairs', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }


// end section

    public function setDateAttribute( $value ) {
        $this->attributes['date'] = (new Carbon($value))->format('Y-m-d');
    }

    public function setTimeAttribute( $value ) {
        $this->attributes['time'] = (new Carbon($value))->format('H:i:s');
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
