<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInvoInvoiceIdColumnToInvoInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invo_invoices', function (Blueprint $table) {
            //
            $table->unsignedBigInteger('invo_invoice_id')->nullable()->comment('identificador de la factura');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invo_invoices', function (Blueprint $table) {
            //
            $table->dropColumn('invo_invoice_id');
        });
    }
}
