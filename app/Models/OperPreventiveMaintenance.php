<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperPreventiveMaintenance extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['oper_machine_id','name','date','time','next',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperPreventiveMaintenance $oper_preventive_maintenance=null){
        if($oper_preventive_maintenance){
            $ignore_unique = $oper_preventive_maintenance->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_preventive_maintenances';
        $validation_rule = [

            'model.oper_machine_id' => 'integer|nullable',
            'model.name' => 'nullable',
            'model.date' => 'nullable',
            'model.time' => 'nullable',
            'model.next' => 'nullable',


        ];
        if($oper_preventive_maintenance){

        }
        return $validation_rule;
    }



	public function operMachine() {
		return $this->belongsTo('App\Models\OperMachine');
	}



    public static function getRelationships()
    {
        return [
            'operMachine',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperMachine'] = OperMachine::all();
		return $lists;
	}

    public function scopeOperMachineByName(Builder $query, $name)
    {
        return $query->whereHas('operMachine', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }


// end section

    public function setDateAttribute( $value ) {
        $this->attributes['date'] = (new Carbon($value))->format('Y-m-d');
    }

    public function setTimeAttribute($value)
    {
        $this->attributes['time'] = date('H:i:s', strtotime($value));
    }

    public function setNextAttribute($value)
    {
        $this->attributes['next'] = date('Y-m-d', strtotime($value));
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
