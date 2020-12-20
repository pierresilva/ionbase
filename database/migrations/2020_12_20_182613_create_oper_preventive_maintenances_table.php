<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperPreventiveMaintenancesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_preventive_maintenances', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('oper_machine_id')->nullable()->comment('');
            $table->foreign('oper_machine_id')->references('id')->on('oper_machines')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->nullable()->comment('');
            $table->date('date')->nullable()->comment('');
            $table->time('time')->nullable()->comment('');
            $table->date('next')->nullable()->comment('');
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
        Schema::dropIfExists('oper_preventive_maintenances');
        Schema::enableForeignKeyConstraints();
    }
}
