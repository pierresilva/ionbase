<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperReplacementsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_replacements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->nullable()->comment('');
            $table->unsignedBigInteger('oper_machine_id')->nullable()->comment('');
            $table->foreign('oper_machine_id')->references('id')->on('oper_machines')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('oper_contractor_id')->nullable()->comment('');
            $table->foreign('oper_contractor_id')->references('id')->on('oper_contractors')->onUpdate('cascade')->onDelete('cascade');
            $table->date('date')->nullable()->comment('');
            $table->time('time')->nullable()->comment('');
            $table->text('warranty')->nullable()->comment('');
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
        Schema::dropIfExists('oper_replacements');
        Schema::enableForeignKeyConstraints();
    }
}
