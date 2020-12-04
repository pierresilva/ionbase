<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHousUnitAreasTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('hous_unit_areas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('hous_unit_id')->nullable()->comment('');
            $table->foreign('hous_unit_id')->references('id')->on('hous_units')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->comment('');
            $table->string('code')->comment('');
            $table->softDeletes();
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
        Schema::dropIfExists('hous_unit_areas');
        Schema::enableForeignKeyConstraints();
    }
}
