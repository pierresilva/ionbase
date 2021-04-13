<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisiVisitor extends Model
{
    //
    protected $fillable = [
        'identification',
        'full_name',
        'phone',
        'email',
        'is_permanent',
        'charge_parking',
        'user_id',
        'hous_unit_id',
        'entry_status',
        'photo',
    ];

    // Validate Rule
    public static function getValidateRule(VisiVisitor $visiVisitor = null)
    {
        $ignoreUnique = null;
        if ($visiVisitor) {
            $ignoreUnique = $visiVisitor->id;
        }
        $tableName = 'visi_visitors';
        $validationRule = [

            'model.identification' => 'nullable',
            'model.full_name' => 'required',
            'model.phone' => 'nullable',
            'model.email' => 'nullable',
            'model.is_permanent' => 'nullable',
            'model.charge_parking' => 'nullable',
            'model.user_id' => 'required',
            'model.hous_unit_id' => 'required',
            'model.entry_status' => 'nullable',
            'model.photo' => 'nullable',

        ];

        if ($visiVisitor) {

        }
        return $validationRule;
    }

    public function housUnit()
    {
        return $this->belongsTo('App\Models\HousUnit');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function visiVisitorRegisters()
    {
        return $this->hasMany('App\Models\VisiVisitorRegister');
    }

    public static function getRelationships()
    {
        return [
            'housUnit',
            'user',
            'visiVisitorRegisters.housUnit',
            'visiVisitorRegisters.visiParking',
        ];
    }

    public static function getLists()
    {
        $lists = [];
        $lists['HousUnit'] = HousUnit::whereNotNull('hous_unit_id')->get();
        $lists['User'] = User::get();
        $lists['VisiParking'] = VisiParking::get();
        $lists['VisiRate'] = VisiRate::get();
        $lists['VisiVehicleType'] = VisiVehicleType::get();
        return $lists;
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
