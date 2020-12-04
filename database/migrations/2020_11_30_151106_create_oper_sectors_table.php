<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperSectorsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_sectors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->string('code')->comment('');
            $table->unsignedBigInteger('hous_unit_id')->nullable()->comment('');
            $table->foreign('hous_unit_id')->references('id')->on('hous_units')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('oper_sectors');
        Schema::enableForeignKeyConstraints();
    }
}
