<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\Company
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property string $nit
 * @property string $manager_name
 * @property string $manager_document
 * @property string|null $logo
 * @property int|null $main
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompAddress[] $compAddresses
 * @property-read int|null $comp_addresses_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompContact[] $compContacts
 * @property-read int|null $comp_contacts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompPhone[] $compPhones
 * @property-read int|null $comp_phones_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompResponsability[] $compResponsabilities
 * @property-read int|null $comp_responsabilities_count
 * @method static Builder|Company compAddressesByName($name)
 * @method static Builder|Company compContactsByName($name)
 * @method static Builder|Company compPhonesByName($name)
 * @method static Builder|Company compResponsabilitiesByName($name)
 * @method static Builder|Company newModelQuery()
 * @method static Builder|Company newQuery()
 * @method static \Illuminate\Database\Query\Builder|Company onlyTrashed()
 * @method static Builder|Company query()
 * @method static Builder|Company whereCode($value)
 * @method static Builder|Company whereCreatedAt($value)
 * @method static Builder|Company whereDeletedAt($value)
 * @method static Builder|Company whereId($value)
 * @method static Builder|Company whereLogo($value)
 * @method static Builder|Company whereMain($value)
 * @method static Builder|Company whereManagerDocument($value)
 * @method static Builder|Company whereManagerName($value)
 * @method static Builder|Company whereName($value)
 * @method static Builder|Company whereNit($value)
 * @method static Builder|Company whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Company withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Company withoutTrashed()
 * @mixin \Eloquent
 */
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
