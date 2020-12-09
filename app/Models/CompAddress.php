<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CompAddress
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $company_id
 * @property string $name
 * @property int|null $syst_city_id
 * @property string $address
 * @property int $main
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Company|null $company
 * @property-read \App\Models\SystCity|null $systCity
 * @method static Builder|CompAddress companyByName($name)
 * @method static Builder|CompAddress newModelQuery()
 * @method static Builder|CompAddress newQuery()
 * @method static \Illuminate\Database\Query\Builder|CompAddress onlyTrashed()
 * @method static Builder|CompAddress query()
 * @method static Builder|CompAddress systCityByName($name)
 * @method static Builder|CompAddress whereAddress($value)
 * @method static Builder|CompAddress whereCompanyId($value)
 * @method static Builder|CompAddress whereCreatedAt($value)
 * @method static Builder|CompAddress whereDeletedAt($value)
 * @method static Builder|CompAddress whereId($value)
 * @method static Builder|CompAddress whereMain($value)
 * @method static Builder|CompAddress whereName($value)
 * @method static Builder|CompAddress whereSystCityId($value)
 * @method static Builder|CompAddress whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|CompAddress withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CompAddress withoutTrashed()
 * @mixin \Eloquent
 */
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
