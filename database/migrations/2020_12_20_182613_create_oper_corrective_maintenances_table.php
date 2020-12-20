<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperCorrectiveMaintenancesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_corrective_maintenances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->nullable()->comment('');
            $table->unsignedBigInteger('oper_reason_id')->nullable()->comment('');
            $table->foreign('oper_reason_id')->references('id')->on('oper_reasons')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('hous_unit_area_id')->nullable()->comment('');
            $table->foreign('hous_unit_area_id')->references('id')->on('hous_unit_areas')->onUpdate('cascade')->onDelete('cascade');
            $table->text('detail')->nullable()->comment('');
            $table->date('date')->nullable()->comment('');
            $table->date('time')->nullable()->comment('');
            $table->string('reported_by')->nullable()->comment('');
            $table->string('status')->nullable()->comment('');
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
        Schema::dropIfExists('oper_corrective_maintenances');
        Schema::enableForeignKeyConstraints();
    }
}
