<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperMovementsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_movements', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->unsignedBigInteger('oper_sector_id')->nullable()->comment('');
            $table->foreign('oper_sector_id')->references('id')->on('oper_sectors')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('oper_contractor_id')->nullable()->comment('');
            $table->foreign('oper_contractor_id')->references('id')->on('oper_contractors')->onUpdate('cascade')->onDelete('cascade');
            $table->date('date_statr')->comment('');
            $table->date('date_end')->nullable()->comment('');
            $table->time('time_start')->comment('');
            $table->string('time_end')->nullable()->comment('');
            $table->string('time_total')->nullable()->comment('');
            $table->string('photo')->nullable()->comment('');
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
        Schema::dropIfExists('oper_movements');
        Schema::enableForeignKeyConstraints();
    }
}
