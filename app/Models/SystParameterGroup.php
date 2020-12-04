<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SystParameterGroup extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystParameterGroup $syst_parameter_group=null){
        $ignore_unique = null;
        if($syst_parameter_group){
            $ignore_unique = $syst_parameter_group->id;
        }
        $table_name = 'syst_parameter_groups';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($syst_parameter_group){

        }
        return $validation_rule;
    }

	public function systParameters() {
		return $this->hasMany('App\Models\SystParameter');
	}



    public static function getRelationships()
    {
        return [
            'systParameters',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['SystParameter'] = SystParameter::all();
		return $lists;
	}

    public function scopeSystParametersByName(Builder $query, $name)
    {
        return $query->whereHas('systParameters', function ($query) use ($name) {
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
