<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperReason extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperReason $oper_reason=null){
        if($oper_reason){
            $ignore_unique = $oper_reason->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_reasons';
        $validation_rule = [

            'model.name' => 'required',


        ];
        if($oper_reason){

        }
        return $validation_rule;
    }

	public function operCorrectiveMaintenances() {
		return $this->hasMany('App\Models\OperCorrectiveMaintenance');
	}





    public static function getRelationships()
    {
        return [
            'operCorrectiveMaintenances',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperCorrectiveMaintenance'] = OperCorrectiveMaintenance::all();
		return $lists;
	}

    public function scopeOperCorrectiveMaintenancesByName(Builder $query, $name)
    {
        return $query->whereHas('operCorrectiveMaintenances', function ($query) use ($name) {
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
