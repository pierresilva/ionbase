<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisiVisitorRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::disableForeignKeyConstraints();
        Schema::create('visi_visitor_registers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('visi_visitor_id')->nullable()->comment('Identificador del visitante');
            $table->foreign('visi_visitor_id')->references('id')->on('visi_visitors');
            $table->unsignedBigInteger('hous_unit_id')->nullable()->comment('Identificador de la unidad habitacional');
            $table->foreign('hous_unit_id')->references('id')->on('hous_units');
            $table->dateTime('entry_date')->nullable()->comment('Fecha y hora de entrada');
            $table->dateTime('departure_date')->nullable()->comment('Fecha y hora de salida');
            $table->integer('total_minutes')->nullable()->comment('Minutos totales de permanencia');
            $table->string('approved_by')->nullable()->comment('Nombre de la persona que autoriza el ingreso');
            $table->unsignedBigInteger('visi_vehicle_type_id')->nullable()->comment('Identificador del tipo de vehículo');
            $table->foreign('visi_vehicle_type_id')->references('id')->on('visi_vehicle_types');
            $table->unsignedBigInteger('visi_rate_id')->nullable()->comment('Identificador de la tarifa');
            $table->foreign('visi_rate_id')->references('id')->on('visi_rates');
            $table->timestamps();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('visi_visitor_registers');
        Schema::enableForeignKeyConstraints();
    }
}
