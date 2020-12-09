<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\HousUnitArea
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $hous_unit_id
 * @property string $name
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\HousUnit|null $housUnit
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OperSchedule[] $operSchedules
 * @property-read int|null $oper_schedules_count
 * @method static Builder|HousUnitArea housUnitByName($name)
 * @method static Builder|HousUnitArea newModelQuery()
 * @method static Builder|HousUnitArea newQuery()
 * @method static \Illuminate\Database\Query\Builder|HousUnitArea onlyTrashed()
 * @method static Builder|HousUnitArea operSchedulesByName($name)
 * @method static Builder|HousUnitArea query()
 * @method static Builder|HousUnitArea whereCode($value)
 * @method static Builder|HousUnitArea whereCreatedAt($value)
 * @method static Builder|HousUnitArea whereDeletedAt($value)
 * @method static Builder|HousUnitArea whereHousUnitId($value)
 * @method static Builder|HousUnitArea whereId($value)
 * @method static Builder|HousUnitArea whereName($value)
 * @method static Builder|HousUnitArea whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|HousUnitArea withTrashed()
 * @method static \Illuminate\Database\Query\Builder|HousUnitArea withoutTrashed()
 * @mixin \Eloquent
 */
class HousUnitArea extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['hous_unit_id','name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(HousUnitArea $hous_unit_area=null){
        $ignore_unique = null;
        if($hous_unit_area){
            $ignore_unique = $hous_unit_area->id;
        }
        $table_name = 'hous_unit_areas';
        $validation_rule = [

            'model.hous_unit_id' => 'integer|nullable',
            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($hous_unit_area){

        }
        return $validation_rule;
    }

	public function operSchedules() {
		return $this->hasMany('App\Models\OperSchedule');
	}

	public function housUnit() {
		return $this->belongsTo('App\Models\HousUnit');
	}


    public static function getRelationships()
    {
        return [
            'housUnit',
            'operSchedules',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnit'] = HousUnit::all();
		$lists['OperSchedule'] = OperSchedule::all();
		return $lists;
	}

    public function scopeHousUnitByName(Builder $query, $name)
    {
        return $query->whereHas('housUnit', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperSchedulesByName(Builder $query, $name)
    {
        return $query->whereHas('operSchedules', function ($query) use ($name) {
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
