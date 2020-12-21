<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\OperSchedule
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int|null $hous_unit_area_id
 * @property int|null $oper_sector_id
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\HousUnitArea|null $housUnitArea
 * @property-read \App\Models\OperSector|null $operSector
 * @method static Builder|OperSchedule housUnitAreaByName($name)
 * @method static Builder|OperSchedule newModelQuery()
 * @method static Builder|OperSchedule newQuery()
 * @method static \Illuminate\Database\Query\Builder|OperSchedule onlyTrashed()
 * @method static Builder|OperSchedule operSectorByName($name)
 * @method static Builder|OperSchedule query()
 * @method static Builder|OperSchedule whereCreatedAt($value)
 * @method static Builder|OperSchedule whereDeletedAt($value)
 * @method static Builder|OperSchedule whereHousUnitAreaId($value)
 * @method static Builder|OperSchedule whereId($value)
 * @method static Builder|OperSchedule whereName($value)
 * @method static Builder|OperSchedule whereOperSectorId($value)
 * @method static Builder|OperSchedule whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|OperSchedule withTrashed()
 * @method static \Illuminate\Database\Query\Builder|OperSchedule withoutTrashed()
 * @mixin \Eloquent
 */
class OperSchedule extends Model
{
    use SoftDeletes;

    protected $casts = [
        'time_start' => 'datetime:H:i:s',
        'time_end' => 'datetime:H:i:s',
    ];


// generated section

    // Mass Assignment
    protected $fillable = ['name', 'hous_unit_area_id', 'oper_sector_id', 'oper_contractor_id', 'required_time', 'supervisor_email', 'area_phone', 'time_start', 'time_end', 'periodicity', 'repass'];
    protected $dates = ['deleted_at'];

    // Validate Rule
    public static function getValidateRule(OperSchedule $oper_schedule = null)
    {
        $ignore_unique = null;
        if ($oper_schedule) {
            $ignore_unique = $oper_schedule->id;
        }
        $table_name = 'oper_schedules';
        $validation_rule = [

            'model.name' => 'required',
            'model.hous_unit_area_id' => 'integer|nullable',
            'model.oper_sector_id' => 'integer|nullable',


        ];
        if ($oper_schedule) {

        }
        return $validation_rule;
    }


    public function housUnitArea()
    {
        return $this->belongsTo('App\Models\HousUnitArea');
    }

    public function operSector()
    {
        return $this->belongsTo('App\Models\OperSector');
    }

    public function operContractor()
    {
        return $this->belongsTo('App\Models\OperContractor');
    }

    public function operMovements()
    {
        return $this->belongsTo('App\Models\OperMovement');
    }


    public static function getRelationships()
    {
        return [
            'housUnitArea',
            'operSector',
            'operContractor',
            'operMovements'
        ];
    }

    public static function getLists()
    {
        $lists = [];
        $lists['HousUnitArea'] = HousUnitArea::all();
        $lists['OperSector'] = OperSector::all();
        $lists['OperContractor'] = OperContractor::all();
        $lists['OperMovement'] = OperMovement::all();
        return $lists;
    }

    public function scopeHousUnitAreaByName(Builder $query, $name)
    {
        return $query->whereHas('housUnitArea', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperSectorByName(Builder $query, $name)
    {
        return $query->whereHas('operSector', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }


// end section

    public function setTimeStartAttribute($value)
    {
        $this->attributes['time_start'] = date('H:i:s', strtotime($value));
    }

    public function setTimeEndAttribute($value)
    {
        $this->attributes['time_end'] = date('H:i:s', strtotime($value));
    }

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
