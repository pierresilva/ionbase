<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class OperContractor extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','document','address','phone','email','phone_support','email_support','contact','business_hour','phone_emergency','email_emergency',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(OperContractor $oper_contractor=null){
        $ignore_unique = null;
        if($oper_contractor){
            $ignore_unique = $oper_contractor->id;
        }
        $table_name = 'oper_contractors';
        $validation_rule = [

            'model.name' => 'required',
            'model.document' => 'required',
            'model.address' => 'nullable',
            'model.phone' => 'nullable',
            'model.email' => 'nullable',
            'model.phone_support' => 'nullable',
            'model.email_support' => 'nullable',
            'model.contact' => 'nullable',
            'model.business_hour' => 'nullable',
            'model.phone_emergency' => 'nullable',
            'model.email_emergency' => 'nullable',


        ];
        if($oper_contractor){

        }
        return $validation_rule;
    }

	public function operMovements() {
		return $this->hasMany('App\Models\OperMovement');
	}



    public static function getRelationships()
    {
        return [
            'operMovements',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperMovement'] = OperMovement::all();
		return $lists;
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
