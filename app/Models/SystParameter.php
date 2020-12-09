<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\SystParameter
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $syst_parameter_group_id
 * @property string $name
 * @property string $code
 * @property string|null $riched_text
 * @property string $value
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompResponsability[] $compResponsabilities
 * @property-read int|null $comp_responsabilities_count
 * @property-read \App\Models\SystParameterGroup|null $systParameterGroup
 * @method static Builder|SystParameter compResponsabilitiesByName($name)
 * @method static Builder|SystParameter newModelQuery()
 * @method static Builder|SystParameter newQuery()
 * @method static \Illuminate\Database\Query\Builder|SystParameter onlyTrashed()
 * @method static Builder|SystParameter query()
 * @method static Builder|SystParameter systParameterGroupByName($name)
 * @method static Builder|SystParameter whereCode($value)
 * @method static Builder|SystParameter whereCreatedAt($value)
 * @method static Builder|SystParameter whereDeletedAt($value)
 * @method static Builder|SystParameter whereId($value)
 * @method static Builder|SystParameter whereName($value)
 * @method static Builder|SystParameter whereRichedText($value)
 * @method static Builder|SystParameter whereSystParameterGroupId($value)
 * @method static Builder|SystParameter whereUpdatedAt($value)
 * @method static Builder|SystParameter whereValue($value)
 * @method static \Illuminate\Database\Query\Builder|SystParameter withTrashed()
 * @method static \Illuminate\Database\Query\Builder|SystParameter withoutTrashed()
 * @mixin \Eloquent
 */
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
