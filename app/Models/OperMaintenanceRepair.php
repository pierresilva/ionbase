<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperMaintenanceRepair extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['oper_corrective_maintenance_id','name','date','time','completed_by',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperMaintenanceRepair $oper_maintenance_repair=null){
        if($oper_maintenance_repair){
            $ignore_unique = $oper_maintenance_repair->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_maintenance_repairs';
        $validation_rule = [

            'model.oper_corrective_maintenance_id' => 'integer|nullable',
            'model.name' => 'nullable',
            'model.date' => 'nullable',
            'model.time' => 'nullable',
            'model.completed_by' => 'nullable',


        ];
        if($oper_maintenance_repair){

        }
        return $validation_rule;
    }



	public function operCorrectiveMaintenance() {
		return $this->belongsTo('App\Models\OperCorrectiveMaintenance');
	}



    public static function getRelationships()
    {
        return [
            'operCorrectiveMaintenance',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperCorrectiveMaintenance'] = OperCorrectiveMaintenance::all();
		return $lists;
	}

    public function scopeOperCorrectiveMaintenanceByName(Builder $query, $name)
    {
        return $query->whereHas('operCorrectiveMaintenance', function ($query) use ($name) {
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
