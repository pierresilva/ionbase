<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class CorrPacket extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','hous_unit_id','conveyor','guide_number','received_at','received_comment','delivered_at','delivered_to','delivered_signature','delivered_comment','status',];
    protected $dates = ['deleted_at'];


	// Validate Rule
    public static function getValidateRule(CorrPacket $corr_packet=null){
        if($corr_packet){
            $ignore_unique = $corr_packet->id;
        }else{
            $ignore_unique = 'NULL';
        }
        $table_name = 'corr_packets';
        $validation_rule = [

            'model.name' => 'nullable',
            'model.hous_unit_id' => 'integer|nullable',
            'model.conveyor' => 'nullable',
            'model.guide_number' => 'nullable',
            'model.received_at' => 'nullable',
            'model.received_comment' => 'nullable',
            'model.delivered_at' => 'nullable',
            'model.delivered_to' => 'nullable',
            'model.delivered_signature' => 'nullable',
            'model.delivered_comment' => 'nullable',
            'model.status' => 'nullable',


        ];
        if($corr_packet){

        }
        return $validation_rule;
    }



	public function housUnit() {
		return $this->belongsTo('App\Models\HousUnit');
	}



    public static function getRelationships()
    {
        return [
            'housUnit',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['HousUnit'] = HousUnit::all();
		return $lists;
	}

    public function scopeHousUnitByName(Builder $query, $name)
    {
        return $query->whereHas('housUnit', function ($query) use ($name) {
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
