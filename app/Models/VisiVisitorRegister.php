<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class VisiVisitorRegister extends Model
{
    //
    protected $fillable = [
        'visi_visitor_id',
        'hous_unit_id',
        'entry_date',
        'departure_date',
        'total_minutes',
        'approved_by',
        'visi_vehicle_type_id',
        'visi_rate_id',
        'license_plate',
        'visi_parking_id'
    ];

    protected $dates = [];

    // Validate Rule
    public static function getValidateRule(VisiVisitorRegister $visiVisitorRegister = null)
    {
        $ignoreUnique = null;
        if ($visiVisitorRegister) {
            $ignoreUnique = $visiVisitorRegister->id;
        }
        $tableName = 'visi_visitor_registers';
        $validationRule = [

            'model.visi_visitor_id' => 'required',
            'model.hous_unit_id' => 'required',
            'model.entry_date' => 'nullable',
            'model.departure_date' => 'nullable',
            'model.total_minutes' => 'nullable',
            'model.approved_by' => 'required',
            'model.visi_vehicle_type_id' => 'nullable',
            'model.visi_rate_id' => 'nullable',
            'model.license_plate' => 'nullable',
            'model.visi_parking_id' => 'nullable',
        ];

        if ($visiVisitorRegister) {

        }
        return $validationRule;
    }

    public function housUnit()
    {
        return $this->belongsTo('App\Models\HousUnit');
    }

    public function visiVisitor()
    {
        return $this->belongsTo('App\Models\VisiVisitor');
    }

    public function visiVehicleType()
    {
        return $this->belongsTo('App\Models\VisiVehicleType');
    }

    public function visiRate()
    {
        return $this->belongsTo('App\Models\VisiRate');
    }

    public function visiParking()
    {
        return $this->belongsTo('App\Models\VisiParking');
    }

    public static function getRelationships()
    {
        return [
            'housUnit',
            'visiVisitor',
            'visiVehicleType',
            'visiRate',
            'visiParking',
        ];
    }

    public static function getLists()
    {
        $lists = [];
        $lists['HousUnit'] = HousUnit::whereNotNull('hous_unit_id')->get();
        $lists['VisiVisitor'] = VisiVisitor::get();
        $lists['VisiRate'] = VisiRate::get();
        $lists['VisiVehicleType'] = VisiVehicleType::get();
        $lists['VisiParking'] = VisiParking::get();
        return $lists;
    }

    public function setEntryDateAttribute($value)
    {
        $this->attributes['entry_date'] = (new Carbon($value))->format('Y-m-d H:i:s');
    }

    public function setDepartureDateAttribute($value)
    {
        $this->attributes['departure_date'] = (new Carbon($value))->format('Y-m-d H:i:s');
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
