<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoResolution extends Model
{
    //
    use SoftDeletes;

    protected $fillable = [
        'type',
        'number',
        'date_from',
        'date_to',
        'months',
        'initial',
        'final',
    ];

    public static function getValidateRule(InvoResolution $invoResolution = null)
    {
        $ignoreUnique = '';
        if ($invoResolution) {
            $ignoreUnique = ',' . $invoResolution->id . ',id';
        }
        $tableName = 'invo_resolutions';
        $validation_rule = [

            'model.type' => 'required',
            'model.number' => 'required|unique:invo_resolutions,number' . $ignoreUnique,
            'model.date_from' => 'required',
            'model.date_to' => 'required',
            'model.months' => 'required',
            'model.initial' => 'required',
            'model.final' => 'required'

        ];
        if ($invoResolution) {

        }
        return $validation_rule;
    }

    public function setDateFromAttribute($value)
    {
        $this->attributes['date_from'] = (new Carbon($value))->format('Y-m-d');
    }

    public function setDateToAttribute($value)
    {
        $this->attributes['date_to'] = (new Carbon($value))->format('Y-m-d');
    }

    public function invoInvoices()
    {
        return $this->hasMany(InvoInvoice::class);
    }

    public static function getRelationships()
    {
        return [
            'invoInvoices',
        ];
    }

    public static function getLists()
    {
        return [];
    }

}
