<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\SystParameterGroup
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\SystParameter[] $systParameters
 * @property-read int|null $syst_parameters_count
 * @method static Builder|SystParameterGroup newModelQuery()
 * @method static Builder|SystParameterGroup newQuery()
 * @method static \Illuminate\Database\Query\Builder|SystParameterGroup onlyTrashed()
 * @method static Builder|SystParameterGroup query()
 * @method static Builder|SystParameterGroup systParametersByName($name)
 * @method static Builder|SystParameterGroup whereCode($value)
 * @method static Builder|SystParameterGroup whereCreatedAt($value)
 * @method static Builder|SystParameterGroup whereDeletedAt($value)
 * @method static Builder|SystParameterGroup whereId($value)
 * @method static Builder|SystParameterGroup whereName($value)
 * @method static Builder|SystParameterGroup whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|SystParameterGroup withTrashed()
 * @method static \Illuminate\Database\Query\Builder|SystParameterGroup withoutTrashed()
 * @mixin \Eloquent
 */
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
