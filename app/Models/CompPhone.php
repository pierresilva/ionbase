<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CompPhone
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $company_id
 * @property string $name
 * @property string $number
 * @property int|null $main
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Company|null $company
 * @method static Builder|CompPhone companyByName($name)
 * @method static Builder|CompPhone newModelQuery()
 * @method static Builder|CompPhone newQuery()
 * @method static \Illuminate\Database\Query\Builder|CompPhone onlyTrashed()
 * @method static Builder|CompPhone query()
 * @method static Builder|CompPhone whereCompanyId($value)
 * @method static Builder|CompPhone whereCreatedAt($value)
 * @method static Builder|CompPhone whereDeletedAt($value)
 * @method static Builder|CompPhone whereId($value)
 * @method static Builder|CompPhone whereMain($value)
 * @method static Builder|CompPhone whereName($value)
 * @method static Builder|CompPhone whereNumber($value)
 * @method static Builder|CompPhone whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|CompPhone withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CompPhone withoutTrashed()
 * @mixin \Eloquent
 */
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
