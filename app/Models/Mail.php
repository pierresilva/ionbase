<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * App\Models\Mail
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $mail_template_id
 * @property string $subject
 * @property string $receiver
 * @property string|null $html
 * @property string|null $text
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \App\Models\MailTemplate|null $mailTemplate
 * @method static Builder|Mail mailTemplateBySubject($subject)
 * @method static Builder|Mail newModelQuery()
 * @method static Builder|Mail newQuery()
 * @method static \Illuminate\Database\Query\Builder|Mail onlyTrashed()
 * @method static Builder|Mail query()
 * @method static Builder|Mail whereCreatedAt($value)
 * @method static Builder|Mail whereDeletedAt($value)
 * @method static Builder|Mail whereHtml($value)
 * @method static Builder|Mail whereId($value)
 * @method static Builder|Mail whereMailTemplateId($value)
 * @method static Builder|Mail whereReceiver($value)
 * @method static Builder|Mail whereSubject($value)
 * @method static Builder|Mail whereText($value)
 * @method static Builder|Mail whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|Mail withTrashed()
 * @method static \Illuminate\Database\Query\Builder|Mail withoutTrashed()
 * @mixin \Eloquent
 */
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
