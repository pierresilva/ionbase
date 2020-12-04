<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CompPhone extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['company_id','name','number','main',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CompPhone $comp_phone=null){
        $ignore_unique = null;
        if($comp_phone){
            $ignore_unique = $comp_phone->id;
        }
        $table_name = 'comp_phones';
        $validation_rule = [

            'model.company_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.number' => 'required',
            'model.main' => 'nullable',


        ];
        if($comp_phone){

        }
        return $validation_rule;
    }


	public function company() {
		return $this->belongsTo('App\Models\Company');
	}


    public static function getRelationships()
    {
        return [
            'company',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Company'] = Company::all();
		return $lists;
	}

    public function scopeCompanyByName(Builder $query, $name)
    {
        return $query->whereHas('company', function ($query) use ($name) {
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
