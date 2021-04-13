<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invo_invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invo_resolution_id')->nullable()->comment('ID de la resolución');
            $table->unsignedBigInteger('visi_visitor_id')->nullable()->comment('ID del visitante');
            $table->unsignedBigInteger('visi_visitor_register_id')->nullable()->comment('ID del registro del visitante');
            $table->string('firstname')->nullable()->comment('Nombres del cliente');
            $table->string('lastname')->nullable()->comment('Apellidos del cliente');
            $table->string('document_type')->nullable()->comment('Tipo de documento del cliente');
            $table->string('document')->nullable()->comment('Número de documento del cliente');
            $table->date('date')->nullable()->comment('Fecha de facturación');
            $table->float('total')->nullable()->comment('Total de la factura');
            $table->float('IVA')->nullable()->comment('Total IVA de la factura');
            $table->text('observations')->nullable()->comment('Observaciones a la factura');
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
        Schema::dropIfExists('invo_invoices');
    }
}
