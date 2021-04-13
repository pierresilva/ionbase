<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisiVisitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('visi_visitors', function (Blueprint $table) {
            $table->id();
            $table->string('identification')->unique()->comment('Número de identificación del visitante');
            $table->string('full_name')->nullable()->comment('Nombre completo del visitante');
            $table->string('phone')->nullable()->comment('Número telefónico del visitante');
            $table->string('email')->nullable()->comment('Correo electrónico del visitante');
            $table->boolean('is_permanent')->nullable()->default(false)->comment('Determina si se permite el acceso permanente');
            $table->boolean('charge_parking')->nullable()->default(false)->comment('Determina si se cobra parqueadero');
            $table->unsignedBigInteger('user_id')->comment('Usuario que solicita');
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('hous_unit_id')->comment('Unidad habitacional aprobada');
            $table->foreign('hous_unit_id')->references('id')->on('hous_units');
            $table->string('entry_status')->nullable()->comment('Estado de entrada (in, out)');
            $table->string('photo')->nullable()->comment('URL de la fotografía del visitante');
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
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('visi_visitors');
        Schema::enableForeignKeyConstraints();
    }
}
