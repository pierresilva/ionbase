<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisiRate extends Model
{
    //

    protected $fillable = [
        'code',
        'name',
        'value',
        'comment',
    ];

    /**
     * @param VisiRate|null $visiRate
     * @return string[]
     */
    public static function getValidateRule(VisiRate $visiRate = null)
    {
        $ignoreUnique = '';
        if ($visiRate) {
            $ignoreUnique = ',' . $visiRate->id;
        }
        $tableName = 'visi_parkings';
        $validationRule = [
            'model.name' => 'required|unique:' . $tableName . ',name' . $ignoreUnique,
            'model.code' => 'nullable',
            'model.value' => 'required',
            'model.comment' => 'nullable',
        ];

        if ($visiRate) {

        }
        return $validationRule;
    }

    /**
     * @return array
     */
    public static function getRelationships()
    {
        return [];
    }

    /**
     * @return array
     */
    public static function getLists()
    {
        return [];
    }
}
