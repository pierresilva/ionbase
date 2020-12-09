<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\OperMovement
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property int|null $oper_sector_id
 * @property int|null $oper_contractor_id
 * @property string $date_statr
 * @property string|null $date_end
 * @property string $time_start
 * @property string|null $time_end
 * @property string|null $time_total
 * @property string|null $photo
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\OperContractor|null $operContractor
 * @property-read \App\Models\OperSector|null $operSector
 * @method static Builder|OperMovement newModelQuery()
 * @method static Builder|OperMovement newQuery()
 * @method static \Illuminate\Database\Query\Builder|OperMovement onlyTrashed()
 * @method static Builder|OperMovement operContractorByName($name)
 * @method static Builder|OperMovement operSectorByName($name)
 * @method static Builder|OperMovement query()
 * @method static Builder|OperMovement whereCreatedAt($value)
 * @method static Builder|OperMovement whereDateEnd($value)
 * @method static Builder|OperMovement whereDateStatr($value)
 * @method static Builder|OperMovement whereDeletedAt($value)
 * @method static Builder|OperMovement whereId($value)
 * @method static Builder|OperMovement whereName($value)
 * @method static Builder|OperMovement whereOperContractorId($value)
 * @method static Builder|OperMovement whereOperSectorId($value)
 * @method static Builder|OperMovement wherePhoto($value)
 * @method static Builder|OperMovement whereTimeEnd($value)
 * @method static Builder|OperMovement whereTimeStart($value)
 * @method static Builder|OperMovement whereTimeTotal($value)
 * @method static Builder|OperMovement whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|OperMovement withTrashed()
 * @method static \Illuminate\Database\Query\Builder|OperMovement withoutTrashed()
 * @mixin \Eloquent
 */
class OperMovement extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','oper_sector_id','oper_contractor_id','date_statr','date_end','time_start','time_end','time_total','photo',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(OperMovement $oper_movement=null){
        $ignore_unique = null;
        if($oper_movement){
            $ignore_unique = $oper_movement->id;
        }
        $table_name = 'oper_movements';
        $validation_rule = [

            'model.name' => 'required',
            'model.oper_sector_id' => 'integer|nullable',
            'model.oper_contractor_id' => 'integer|nullable',
            'model.date_statr' => 'required',
            'model.date_end' => 'nullable',
            'model.time_start' => 'required',
            'model.time_end' => 'nullable',
            'model.time_total' => 'nullable',
            'model.photo' => 'nullable',


        ];
        if($oper_movement){

        }
        return $validation_rule;
    }


	public function operSector() {
		return $this->belongsTo('App\Models\OperSector');
	}
	public function operContractor() {
		return $this->belongsTo('App\Models\OperContractor');
	}


    public static function getRelationships()
    {
        return [
            'operSector',
            'operContractor',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperSector'] = OperSector::all();
		$lists['OperContractor'] = OperContractor::all();
		return $lists;
	}

    public function scopeOperSectorByName(Builder $query, $name)
    {
        return $query->whereHas('operSector', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeOperContractorByName(Builder $query, $name)
    {
        return $query->whereHas('operContractor', function ($query) use ($name) {
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
