<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CouncilCitationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
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
        return $this->view('mails.council_citation')
            ->with(
                [
                    'testVarOne' => '1',
                    'testVarTwo' => '2',
                ])
            /*->attach(public_path('/images').'/demo.jpg', [
                'as' => 'demo.jpg',
                'mime' => 'image/jpeg',
            ])*/;
    }
}
