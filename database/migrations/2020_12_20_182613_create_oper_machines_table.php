<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperMachinesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_machines', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->unsignedBigInteger('hous_unit_area_id')->nullable()->comment('');
            $table->foreign('hous_unit_area_id')->references('id')->on('hous_unit_areas')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('oper_contractor_id')->nullable()->comment('');
            $table->foreign('oper_contractor_id')->references('id')->on('oper_contractors')->onUpdate('cascade')->onDelete('cascade');
            $table->date('contract_expiration_date')->nullable()->comment('');
            $table->integer('contract_monthly_price')->nullable()->comment('');
            $table->integer('monthly_periodicity')->nullable()->comment('');
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
        Schema::dropIfExists('oper_machines');
        Schema::enableForeignKeyConstraints();
    }
}
