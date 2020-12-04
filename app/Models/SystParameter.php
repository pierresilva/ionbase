<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SystParameter extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['syst_parameter_group_id','name','code','riched_text','value',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystParameter $syst_parameter=null){
        $ignore_unique = null;
        if($syst_parameter){
            $ignore_unique = $syst_parameter->id;
        }
        $table_name = 'syst_parameters';
        $validation_rule = [

            'model.syst_parameter_group_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.code' => 'required',
            'model.riched_text' => 'nullable',
            'model.value' => 'required',


        ];
        if($syst_parameter){

        }
        return $validation_rule;
    }

	public function compResponsabilities() {
		return $this->hasMany('App\Models\CompResponsability');
	}

	public function systParameterGroup() {
		return $this->belongsTo('App\Models\SystParameterGroup');
	}


    public static function getRelationships()
    {
        return [
            'systParameterGroup',
            'compResponsabilities',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['SystParameterGroup'] = SystParameterGroup::all();
		$lists['CompResponsability'] = CompResponsability::all();
		return $lists;
	}

    public function scopeSystParameterGroupByName(Builder $query, $name)
    {
        return $query->whereHas('systParameterGroup', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCompResponsabilitiesByName(Builder $query, $name)
    {
        return $query->whereHas('compResponsabilities', function ($query) use ($name) {
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
