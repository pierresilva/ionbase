<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Company extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code','nit','manager_name','manager_document','logo','main',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Company $company=null){
        $ignore_unique = null;
        if($company){
            $ignore_unique = $company->id;
        }
        $table_name = 'companies';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',
            'model.nit' => 'required',
            'model.manager_name' => 'required',
            'model.manager_document' => 'required',
            'model.logo' => 'nullable',
            'model.main' => 'nullable',


        ];
        if($company){

        }
        return $validation_rule;
    }

	public function compPhones() {
		return $this->hasMany('App\Models\CompPhone');
	}
	public function compAddresses() {
		return $this->hasMany('App\Models\CompAddress');
	}
	public function compContacts() {
		return $this->hasMany('App\Models\CompContact');
	}
	public function compResponsabilities() {
		return $this->hasMany('App\Models\CompResponsability');
	}



    public static function getRelationships()
    {
        return [
            'compPhones',
            'compAddresses',
            'compContacts',
            'compResponsabilities',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['CompPhone'] = CompPhone::all();
		$lists['CompAddress'] = CompAddress::all();
		$lists['CompContact'] = CompContact::all();
		$lists['CompResponsability'] = CompResponsability::all();
		return $lists;
	}

    public function scopeCompPhonesByName(Builder $query, $name)
    {
        return $query->whereHas('compPhones', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCompAddressesByName(Builder $query, $name)
    {
        return $query->whereHas('compAddresses', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCompContactsByName(Builder $query, $name)
    {
        return $query->whereHas('compContacts', function ($query) use ($name) {
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
