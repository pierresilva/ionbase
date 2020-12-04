<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CompResponsability extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','company_id','syst_parameter_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CompResponsability $comp_responsability=null){
        $ignore_unique = null;
        if($comp_responsability){
            $ignore_unique = $comp_responsability->id;
        }
        $table_name = 'comp_responsabilities';
        $validation_rule = [

            'model.name' => 'required',
            'model.company_id' => 'integer|nullable',
            'model.syst_parameter_id' => 'integer|required',


        ];
        if($comp_responsability){

        }
        return $validation_rule;
    }


	public function company() {
		return $this->belongsTo('App\Models\Company');
	}
	public function systParameter() {
		return $this->belongsTo('App\Models\SystParameter');
	}


    public static function getRelationships()
    {
        return [
            'company',
            'systParameter',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Company'] = Company::all();
		$lists['SystParameter'] = SystParameter::all();
		return $lists;
	}

    public function scopeCompanyByName(Builder $query, $name)
    {
        return $query->whereHas('company', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystParameterByName(Builder $query, $name)
    {
        return $query->whereHas('systParameter', function ($query) use ($name) {
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
