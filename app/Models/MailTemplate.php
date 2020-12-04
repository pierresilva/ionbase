<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class MailTemplate extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['subject','mailable','html_template','text_template',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(MailTemplate $mail_template=null){
        $ignore_unique = null;
        if($mail_template){
            $ignore_unique = $mail_template->id;
        }
        $table_name = 'mail_templates';
        $validation_rule = [

            'model.subject' => 'required',
            'model.mailable' => 'required',
            'model.html_template' => 'nullable',
            'model.text_template' => 'nullable',


        ];
        if($mail_template){

        }
        return $validation_rule;
    }

	public function mails() {
		return $this->hasMany('App\Models\Mail');
	}



    public static function getRelationships()
    {
        return [
            'mails',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['Mail'] = Mail::all();
		return $lists;
	}

    public function scopeMailsBySubject(Builder $query, $subject)
    {
        return $query->whereHas('mails', function ($query) use ($subject) {
            $query->where('subject', $subject);
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
