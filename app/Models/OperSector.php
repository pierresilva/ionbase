<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\OperSector
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property int|null $hous_unit_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\HousUnit|null $housUnit
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OperMovement[] $operMovements
 * @property-read int|null $oper_movements_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OperSchedule[] $operSchedules
 * @property-read int|null $oper_schedules_count
 * @method static Builder|OperSector housUnitByName($name)
 * @method static Builder|OperSector newModelQuery()
 * @method static Builder|OperSector newQuery()
 * @method static \Illuminate\Database\Query\Builder|OperSector onlyTrashed()
 * @method static Builder|OperSector operMovementsByName($name)
 * @method static Builder|OperSector operSchedulesByName($name)
 * @method static Builder|OperSector query()
 * @method static Builder|OperSector whereCode($value)
 * @method static Builder|OperSector whereCreatedAt($value)
 * @method static Builder|OperSector whereDeletedAt($value)
 * @method static Builder|OperSector whereHousUnitId($value)
 * @method static Builder|OperSector whereId($value)
 * @method static Builder|OperSector whereName($value)
 * @method static Builder|OperSector whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|OperSector withTrashed()
 * @method static \Illuminate\Database\Query\Builder|OperSector withoutTrashed()
 * @mixin \Eloquent
 */
class OperSector extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code','hous_unit_id',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(OperSector $oper_sector=null){
        $ignore_unique = null;
        if($oper_sector){
            $ignore_unique = $oper_sector->id;
        }
        $table_name = 'oper_sectors';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',
            'model.hous_unit_id' => 'integer|nullable',


        ];
        if($oper_sector){

        }
        return $validation_rule;
    }

	public function operSchedules() {
		return $this->hasMany('App\Models\OperSchedule');
	}
	public function operMovements() {
		return $this->hasMany('App\Models\OperMovement');
	}

	public function housUnit() {
		return $this->belongsTo('App\Models\HousUnit');
	}


    public static function getRelationships()
    {
        return [
            'housUnit',
            'operSchedules',
            'operMovements',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnit'] = HousUnit::all();
		$lists['OperSchedule'] = OperSchedule::all();
		$lists['OperMovement'] = OperMovement::all();
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

    public function scopeOperMovementsByName(Builder $query, $name)
    {
        return $query->whereHas('operMovements', function ($query) use ($name) {
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
