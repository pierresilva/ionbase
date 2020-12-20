<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperMaintenanceRepairsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_maintenance_repairs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('oper_corrective_maintenance_id')->nullable()->comment('');
            $table->foreign('oper_corrective_maintenance_id')->references('id')->on('oper_corrective_maintenances')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->nullable()->comment('');
            $table->date('date')->nullable()->comment('');
            $table->time('time')->nullable()->comment('');
            $table->string('completed_by')->nullable()->comment('');
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
        Schema::dropIfExists('oper_maintenance_repairs');
        Schema::enableForeignKeyConstraints();
    }
}
