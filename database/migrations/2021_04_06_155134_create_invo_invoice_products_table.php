<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoInvoiceProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invo_invoice_products', function (Blueprint $table) {
            $table->id();
            $table->string('product')->nullable()->comment('Nombre del producto');
            $table->string('quantity')->nullable()->comment('Cantidad del producto');
            $table->float('subtotal')->nullable()->comment('Subtotal del producto incluido IVA');
            $table->float('IVA')->nullable()->comment('Total IVA');
            $table->text('observations')->nullable()->comment('Observaciones al producto');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invo_invoice_products');
    }
}
