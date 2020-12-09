<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCorrPacketsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('corr_packets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->nullable()->comment('');
            $table->unsignedBigInteger('hous_unit_id')->nullable()->comment('');
            $table->foreign('hous_unit_id')->references('id')->on('hous_units')->onUpdate('cascade')->onDelete('cascade');
            $table->string('conveyor')->nullable()->comment('Nombre del transportador');
            $table->string('guide_number')->nullable()->comment('');
            $table->dateTime('received_at')->nullable()->comment('');
            $table->text('received_comment')->nullable()->comment('');
            $table->dateTime('delivered_at')->nullable()->comment('');
            $table->string('delivered_to')->nullable()->comment('');
            $table->longText('delivered_signature')->nullable()->comment('');
            $table->text('delivered_comment')->nullable()->comment('');
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
        Schema::dropIfExists('corr_packets');
        Schema::enableForeignKeyConstraints();
    }
}
