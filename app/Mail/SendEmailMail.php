<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmailMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @param $data
     */
    public function __construct($data)
    {
        //
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $this->to($this->data->email);
        if (isset($this->data->replyTo) && $this->data->replyTo) {
            $this->replyTo($this->data->replyTo);
        }
        $this->subject($this->data->subject);
        $this->view($this->data->view);

        if (isset($this->data->text) && $this->data->text) {
            $this->text($this->data->text);
        }

        if (isset($this->params->attach)) {
            foreach ($this->data->attach as $value) {
                $this->attach($value['route'], [
                    'as' => $value['as'],
                    'mime' => $value['mime'],
                ]);
            }
        }

        return $this;
    }
}
