<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\SystPosition
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CompContact[] $compContacts
 * @property-read int|null $comp_contacts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static Builder|SystPosition compContactsByName($name)
 * @method static Builder|SystPosition newModelQuery()
 * @method static Builder|SystPosition newQuery()
 * @method static \Illuminate\Database\Query\Builder|SystPosition onlyTrashed()
 * @method static Builder|SystPosition query()
 * @method static Builder|SystPosition usersByName($name)
 * @method static Builder|SystPosition whereCode($value)
 * @method static Builder|SystPosition whereCreatedAt($value)
 * @method static Builder|SystPosition whereDeletedAt($value)
 * @method static Builder|SystPosition whereId($value)
 * @method static Builder|SystPosition whereName($value)
 * @method static Builder|SystPosition whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|SystPosition withTrashed()
 * @method static \Illuminate\Database\Query\Builder|SystPosition withoutTrashed()
 * @mixin \Eloquent
 */
class SystPosition extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['name','code',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(SystPosition $syst_position=null){
        $ignore_unique = null;
        if($syst_position){
            $ignore_unique = $syst_position->id;
        }
        $table_name = 'syst_positions';
        $validation_rule = [

            'model.name' => 'required',
            'model.code' => 'required',


        ];
        if($syst_position){

        }
        return $validation_rule;
    }

	public function users() {
		return $this->hasMany('App\Models\User');
	}
	public function compContacts() {
		return $this->hasMany('App\Models\CompContact');
	}



    public static function getRelationships()
    {
        return [
            'users',
            'compContacts',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['User'] = User::all();
		$lists['CompContact'] = CompContact::all();
		return $lists;
	}

    public function scopeUsersByName(Builder $query, $name)
    {
        return $query->whereHas('users', function ($query) use ($name) {
            $query->where('name', $name);
        });
    }

    public function scopeCompContactsByName(Builder $query, $name)
    {
        return $query->whereHas('compContacts', function ($query) use ($name) {
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
