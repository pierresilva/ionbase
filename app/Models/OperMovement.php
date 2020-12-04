<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperMovement extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','oper_sector_id','oper_contractor_id','date_statr','date_end','time_start','time_end','time_total','photo',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(OperMovement $oper_movement=null){
        $ignore_unique = null;
        if($oper_movement){
            $ignore_unique = $oper_movement->id;
        }
        $table_name = 'oper_movements';
        $validation_rule = [

            'model.name' => 'required',
            'model.oper_sector_id' => 'integer|nullable',
            'model.oper_contractor_id' => 'integer|nullable',
            'model.date_statr' => 'required',
            'model.date_end' => 'nullable',
            'model.time_start' => 'required',
            'model.time_end' => 'nullable',
            'model.time_total' => 'nullable',
            'model.photo' => 'nullable',


        ];
        if($oper_movement){

        }
        return $validation_rule;
    }


	public function operSector() {
		return $this->belongsTo('App\Models\OperSector');
	}
	public function operContractor() {
		return $this->belongsTo('App\Models\OperContractor');
	}


    public static function getRelationships()
    {
        return [
            'operSector',
            'operContractor',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperSector'] = OperSector::all();
		$lists['OperContractor'] = OperContractor::all();
		return $lists;
	}

    public function scopeOperSectorByName(Builder $query, $name)
    {
        return $query->whereHas('operSector', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperContractorByName(Builder $query, $name)
    {
        return $query->whereHas('operContractor', function ($query) use ($name) {
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
