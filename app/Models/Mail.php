<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Mail extends Model
{
    use SoftDeletes;

// generated section

	// Mass Assignment
	protected $fillable = ['mail_template_id','subject','receiver','html','text',];
    protected $dates = ['deleted_at'];

	// Validate Rule
    public static function getValidateRule(Mail $mail=null){
        $ignore_unique = null;
        if($mail){
            $ignore_unique = $mail->id;
        }
        $table_name = 'mails';
        $validation_rule = [

            'model.mail_template_id' => 'integer|nullable',
            'model.subject' => 'required',
            'model.receiver' => 'required',
            'model.html' => 'nullable',
            'model.text' => 'nullable',


        ];
        if($mail){

        }
        return $validation_rule;
    }


	public function mailTemplate() {
		return $this->belongsTo('App\Models\MailTemplate');
	}


    public static function getRelationships()
    {
        return [
            'mailTemplate',
        ];
    }

	public static function getLists() {
		$lists = [];
		$lists['MailTemplate'] = MailTemplate::all();
		return $lists;
	}

    public function scopeMailTemplateBySubject(Builder $query, $subject)
    {
        return $query->whereHas('mailTemplate', function ($query) use ($subject) {
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
