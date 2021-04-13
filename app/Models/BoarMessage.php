<?php

namespace App\Models;

use App\Models\File;
use Illuminate\Database\Eloquent\Model;

class BoarMessage extends Model
{
    //
    protected $fillable = [
        'name',
        'code',
        'file_id',
        'body',
        'notify_to_users',
        'notify_to_house_units',
        'status'
    ];

    public static function getValidateRule(BoarMessage $boar_message = null){
        $ignore_unique = null;
        if($boar_message){
            $ignore_unique = $boar_message->id;
        }
        $table_name = 'comp_addresses';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'nullable',
            'model.file_id' => 'nullable',
            'model.body' => 'required',
            'model.notify_to_users' => 'nullable',
            'model.notify_to_house_units' => 'nullable',
            'model.status' => 'required'

        ];
        if($boar_message){

        }
        return $validation_rule;
    }

    public static function getRelationships()
    {
        return [
        ];
    }

    public static function getLists() {
        $lists = [];
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
