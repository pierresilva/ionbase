<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperCorrectiveMaintenanceOperItemTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_corrective_maintenance_oper_item', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('oper_corrective_maintenance_id')->nullable()->comment('');
            // $table->foreign('oper_corrective_maintenance_id')->references('id')->on('oper_corrective_maintenances')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('oper_item_id')->nullable()->comment('');
            // $table->foreign('oper_item_id')->references('id')->on('oper_items')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('oper_corrective_maintenance_oper_item');
        Schema::enableForeignKeyConstraints();
    }
}
