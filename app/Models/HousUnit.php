<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\HousUnit
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\HousUnitArea[] $housUnitAreas
 * @property-read int|null $hous_unit_areas_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OperSector[] $operSectors
 * @property-read int|null $oper_sectors_count
 * @method static Builder|HousUnit housUnitAreasByName($name)
 * @method static Builder|HousUnit newModelQuery()
 * @method static Builder|HousUnit newQuery()
 * @method static \Illuminate\Database\Query\Builder|HousUnit onlyTrashed()
 * @method static Builder|HousUnit operSectorsByName($name)
 * @method static Builder|HousUnit query()
 * @method static Builder|HousUnit whereCode($value)
 * @method static Builder|HousUnit whereCreatedAt($value)
 * @method static Builder|HousUnit whereDeletedAt($value)
 * @method static Builder|HousUnit whereId($value)
 * @method static Builder|HousUnit whereName($value)
 * @method static Builder|HousUnit whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|HousUnit withTrashed()
 * @method static \Illuminate\Database\Query\Builder|HousUnit withoutTrashed()
 * @mixin \Eloquent
 */
class HousUnit extends Model
{
    use SoftDeletes;

// generated section

    // Mass Assignment
    protected $fillable = ['hous_unit_id', 'name', 'code', 'contact_first_name', 'contact_last_name', 'contact_phone', 'contact_email'];
    protected $dates = ['deleted_at'];

    // Validate Rule
    public static function getValidateRule(HousUnit $hous_unit = null)
    {
        $ignore_unique = null;
        if ($hous_unit) {
            $ignore_unique = $hous_unit->id;
        }
        $table_name = 'hous_units';
        $validation_rule = [

            'model.hous_unit_id' => 'nullable',
            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if ($hous_unit) {

        }
        return $validation_rule;
    }

    public function housUnitAreas()
    {
        return $this->hasMany('App\Models\HousUnitArea');
    }

    public function operSectors()
    {
        return $this->hasMany('App\Models\OperSector');
    }

    public function corrPackets()
    {
        return $this->hasMany('App\Models\CorrPacket');
    }


    public static function getRelationships()
    {
        return [
            'housUnitAreas',
            'operSectors',
            'corrPackets',
            'parent',
            'childrenUnits'
        ];
    }

    public static function getLists()
    {
        $lists = [];
        $lists['HousUnitArea'] = HousUnitArea::all();
        $lists['OperSector'] = OperSector::all();
        $lists['CorrPacket'] = CorrPacket::all();
        $lists['HousUnit'] = HousUnit::with('parent')->get();
        return $lists;
    }

    public function scopeHousUnitAreasByName(Builder $query, $name)
    {
        return $query->whereHas('housUnitAreas', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperSectorsByName(Builder $query, $name)
    {
        return $query->whereHas('operSectors', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCorrPacketsByName(Builder $query, $name)
    {
        return $query->whereHas('corrPackets', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }


// end section

    public function parent()
    {
        return $this->belongsTo(HousUnit::class, 'hous_unit_id')->with('parent');
    }

    public function parentUnits()
    {
        return $this->belongsTo(HousUnit::class, 'hous_unit_id')->with('parentUnits');
    }

    // this relationship will only return one level of child items
    public function children()
    {
        return $this->hasMany(HousUnit::class, 'hous_unit_id');
    }

    // This is method where we implement recursive relationship
    public function childrenUnits()
    {
        return $this->hasMany(HousUnit::class, 'hous_unit_id')->with('childrenUnits', 'corrPackets');
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
