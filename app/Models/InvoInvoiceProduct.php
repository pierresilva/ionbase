<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoInvoiceProduct extends Model
{
    //

    protected $fillable = [
        'product',
        'quantity',
        'subtotal',
        'IVA',
        'observations',
        'invo_invoice_id',
    ];

    use SoftDeletes;

    public function invoice() {
        return $this->belongsTo(InvoInvoice::class);
    }
}
