<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoResolutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invo_resolutions', function (Blueprint $table) {
            $table->id();
            $table->string('type')->nullable()->comment('Tipo de resolución');
            $table->string('number')->nullable()->comment('Número de la resolución');
            $table->date('date_from')->nullable()->comment('Fecha de la resolución');
            $table->date('date_to')->nullable()->comment('Fecha final de la resolución');
            $table->integer('months')->nullable()->comment('Número de meses autorizados');
            $table->integer('initial')->nullable()->comment('Numero inicial');
            $table->integer('final')->nullable()->comment('Numero final');
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
        Schema::dropIfExists('invo_resolutions');
    }
}
