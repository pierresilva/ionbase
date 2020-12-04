<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperSchedulesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_schedules', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->unsignedBigInteger('hous_unit_area_id')->nullable()->comment('');
            $table->foreign('hous_unit_area_id')->references('id')->on('hous_unit_areas')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('oper_sector_id')->nullable()->comment('');
            $table->foreign('oper_sector_id')->references('id')->on('oper_sectors')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('oper_schedules');
        Schema::enableForeignKeyConstraints();
    }
}
