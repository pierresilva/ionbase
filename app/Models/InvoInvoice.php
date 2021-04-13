<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class InvoInvoice extends Model
{
    //
    use SoftDeletes;

    protected $fillable = [
        'invo_resolution_id',
        'visi_visitor_id',
        'visi_visitor_register_id',
        'firstname',
        'lastname',
        'document_type',
        'document',
        'date',
        'total',
        'IVA',
        'observations',
        'number',
    ];

    public function invoResolution() {
        return $this->belongsTo(InvoResolution::class);
    }

    public function invoProducts() {
        return $this->hasMany(InvoInvoiceProduct::class);
    }

    public function visiVisitor() {
        return $this->belongsTo(VisiVisitor::class);
    }

    public function visiVisitorRegister() {
        return $this->belongsTo(VisiVisitorRegister::class);
    }

    public static function getRelationships()
    {
        return [
            'invoResolution',
            'visiVisitor',
            'invoProducts',
            'visiVisitorRegister',
        ];
    }

    public static function getLists()
    {
        return [
            'InvoResolution' => InvoResolution::where('date_from', '<=', date('Y-m-d'))->where('date_to', '>=', date('Y-m-d'))->get(),
        ];
    }
}
