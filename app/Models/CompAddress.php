<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CompAddress extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['company_id','name','syst_city_id','address','main',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CompAddress $comp_address=null){
        $ignore_unique = null;
        if($comp_address){
            $ignore_unique = $comp_address->id;
        }
        $table_name = 'comp_addresses';
        $validation_rule = [

            'model.company_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.syst_city_id' => 'integer|nullable',
            'model.address' => 'required',
            'model.main' => 'required',


        ];
        if($comp_address){

        }
        return $validation_rule;
    }


	public function company() {
		return $this->belongsTo('App\Models\Company');
	}
	public function systCity() {
		return $this->belongsTo('App\Models\SystCity');
	}


    public static function getRelationships()
    {
        return [
            'company',
            'systCity',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Company'] = Company::all();
		$lists['SystCity'] = SystCity::all();
		return $lists;
	}

    public function scopeCompanyByName(Builder $query, $name)
    {
        return $query->whereHas('company', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystCityByName(Builder $query, $name)
    {
        return $query->whereHas('systCity', function ($query) use ($name) {
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
