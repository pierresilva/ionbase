<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisiParkingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visi_parkings', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('Nombre del parqueadero');
            $table->string('code')->nullable()->comment('Código del parqueadero');
            $table->boolean('available')->nullable()->comment('Indica si el parqueadero esta disponible');
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
        Schema::dropIfExists('visi_parkings');
    }
}
