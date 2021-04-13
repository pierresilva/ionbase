<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisiVehicleTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visi_vehicle_types', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable()->comment('Código del tipo de vehículo');
            $table->string('name')->nullable()->comment('Nombre del tipo de vehículo');
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
        Schema::dropIfExists('visi_vehicle_types');
    }
}
