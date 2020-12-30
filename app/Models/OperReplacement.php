<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperReplacement extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','oper_machine_id','oper_contractor_id','date','time','warranty',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(OperReplacement $oper_replacement=null){
        if($oper_replacement){
            $ignore_unique = $oper_replacement->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'oper_replacements';
        $validation_rule = [

            'model.name' => 'nullable',
            'model.oper_machine_id' => 'integer|nullable',
            'model.oper_contractor_id' => 'integer|nullable',
            'model.date' => 'nullable',
            'model.time' => 'nullable',
            'model.warranty' => 'nullable',


        ];
        if($oper_replacement){

        }
        return $validation_rule;
    }



	public function operMachine() {
		return $this->belongsTo('App\Models\OperMachine');
	}
	public function operContractor() {
		return $this->belongsTo('App\Models\OperContractor');
	}



    public static function getRelationships()
    {
        return [
            'operMachine',
            'operContractor',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperMachine'] = OperMachine::all();
		$lists['OperContractor'] = OperContractor::all();
		return $lists;
	}

    public function scopeOperMachineByName(Builder $query, $name)
    {
        return $query->whereHas('operMachine', function ($query) use ($name) {
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

    public function setDateAttribute( $value ) {
        $this->attributes['date'] = (new Carbon($value))->format('Y-m-d');
    }

    public function setTimeAttribute($value)
    {
        $this->attributes['time'] = date('H:i:s', strtotime($value));
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
