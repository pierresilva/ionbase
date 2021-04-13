<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisiRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visi_rates', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable()->comment('Código de la tarifa');
            $table->string('name')->nullable()->comment('Nombre de la tarifa');
            $table->double('value')->nullable()->comment('Valor de la tarifa (por minutos)');
            $table->text('comment')->nullable()->comment('Comentario de la tarifa');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visi_rates');
    }
}
