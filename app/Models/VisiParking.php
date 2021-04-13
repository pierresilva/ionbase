<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class VisiParking extends Model
{
    //
    use SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'available',
    ];

    // Validate Rule
    public static function getValidateRule(VisiParking $visiParking = null)
    {
        $ignoreUnique = null;
        if ($visiParking) {
            $ignoreUnique = $visiParking->id;
        }
        $tableName = 'visi_parkings';
        $validationRule = [

            'model.name' => 'required',
            'model.code' => 'nullable',
            'model.available' => 'nullable',
        ];

        if ($visiParking) {

        }
        return $validationRule;
    }

    public function visiVisitorRegisters()
    {
        return $this->hasMany('App\Models\VisiVisitorRegister');
    }

    public static function getRelationships()
    {
        return [
            'visiVisitorRegisters.visiVisitor'
        ];
    }

    public static function getLists()
    {
        $lists = [];
        return $lists;
    }
}
