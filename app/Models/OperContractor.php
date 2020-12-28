<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\OperContractor
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $document
 * @property string|null $address
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $phone_support
 * @property string|null $email_support
 * @property string|null $contact
 * @property string|null $business_hour
 * @property string|null $phone_emergency
 * @property string|null $email_emergency
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\OperMovement[] $operMovements
 * @property-read int|null $oper_movements_count
 * @method static Builder|OperContractor newModelQuery()
 * @method static Builder|OperContractor newQuery()
 * @method static \Illuminate\Database\Query\Builder|OperContractor onlyTrashed()
 * @method static Builder|OperContractor operMovementsByName($name)
 * @method static Builder|OperContractor query()
 * @method static Builder|OperContractor whereAddress($value)
 * @method static Builder|OperContractor whereBusinessHour($value)
 * @method static Builder|OperContractor whereContact($value)
 * @method static Builder|OperContractor whereCreatedAt($value)
 * @method static Builder|OperContractor whereDeletedAt($value)
 * @method static Builder|OperContractor whereDocument($value)
 * @method static Builder|OperContractor whereEmail($value)
 * @method static Builder|OperContractor whereEmailEmergency($value)
 * @method static Builder|OperContractor whereEmailSupport($value)
 * @method static Builder|OperContractor whereId($value)
 * @method static Builder|OperContractor whereName($value)
 * @method static Builder|OperContractor wherePhone($value)
 * @method static Builder|OperContractor wherePhoneEmergency($value)
 * @method static Builder|OperContractor wherePhoneSupport($value)
 * @method static Builder|OperContractor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|OperContractor withTrashed()
 * @method static \Illuminate\Database\Query\Builder|OperContractor withoutTrashed()
 * @mixin \Eloquent
 */
class OperContractor extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','document','address','phone','email','phone_support','email_support','contact','business_hour','phone_emergency','email_emergency','user_id'];
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

	public function user() {
        return $this->belongsTo('App\Models\User');
    }



    public static function getRelationships()
    {
        return [
            'operMovements',
            'user'
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['OperMovement'] = OperMovement::all();
        $lists['User'] = User::all();
		return $lists;
	}

    public function scopeOperMovementsByName(Builder $query, $name)
    {
        return $query->whereHas('operMovements', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeUserByName(Builder $query, $name) {
        return $query->whereHas('user', function ($query) use ($name) {
            $query->where('name', 'like', '%' . $name . '%');
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
