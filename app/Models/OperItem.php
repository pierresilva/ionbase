<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperItem extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','inventory_code',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperItem $oper_item=null){
        if($oper_item){
            $ignore_unique = $oper_item->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_items';
        $validation_rule = [

            'model.name' => 'required',
            'model.inventory_code' => 'nullable|unique:'.$table_name.',inventory_code,'.$ignore_unique.',id,deleted_at,NOT_NULL',


        ];
        if($oper_item){

        }
        return $validation_rule;
    }





	public function operCorrectiveMaintenances() {
		return $this->belongsToMany('App\Models\OperCorrectiveMaintenance')
		->orderBy('id')
		->withTimestamps();
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
