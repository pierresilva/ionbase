<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\CompContact
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $company_id
 * @property int|null $syst_position_id
 * @property string $name
 * @property string $phone
 * @property string|null $email
 * @property int|null $main
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\Company|null $company
 * @property-read \App\Models\SystPosition|null $systPosition
 * @method static Builder|CompContact companyByName($name)
 * @method static Builder|CompContact newModelQuery()
 * @method static Builder|CompContact newQuery()
 * @method static \Illuminate\Database\Query\Builder|CompContact onlyTrashed()
 * @method static Builder|CompContact query()
 * @method static Builder|CompContact systPositionByName($name)
 * @method static Builder|CompContact whereCompanyId($value)
 * @method static Builder|CompContact whereCreatedAt($value)
 * @method static Builder|CompContact whereDeletedAt($value)
 * @method static Builder|CompContact whereEmail($value)
 * @method static Builder|CompContact whereId($value)
 * @method static Builder|CompContact whereMain($value)
 * @method static Builder|CompContact whereName($value)
 * @method static Builder|CompContact wherePhone($value)
 * @method static Builder|CompContact whereSystPositionId($value)
 * @method static Builder|CompContact whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|CompContact withTrashed()
 * @method static \Illuminate\Database\Query\Builder|CompContact withoutTrashed()
 * @mixin \Eloquent
 */
class CompContact extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['company_id','syst_position_id','name','phone','email','main',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(CompContact $comp_contact=null){
        $ignore_unique = null;
        if($comp_contact){
            $ignore_unique = $comp_contact->id;
        }
        $table_name = 'comp_contacts';
        $validation_rule = [

            'model.company_id' => 'integer|nullable',
            'model.syst_position_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.phone' => 'required',
            'model.email' => 'nullable',
            'model.main' => 'nullable',


        ];
        if($comp_contact){

        }
        return $validation_rule;
    }


	public function company() {
		return $this->belongsTo('App\Models\Company');
	}
	public function systPosition() {
		return $this->belongsTo('App\Models\SystPosition');
	}


    public static function getRelationships()
    {
        return [
            'company',
            'systPosition',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Company'] = Company::all();
		$lists['SystPosition'] = SystPosition::all();
		return $lists;
	}

    public function scopeCompanyByName(Builder $query, $name)
    {
        return $query->whereHas('company', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeSystPositionByName(Builder $query, $name)
    {
        return $query->whereHas('systPosition', function ($query) use ($name) {
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
