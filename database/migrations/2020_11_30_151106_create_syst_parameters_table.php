<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSystParametersTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('syst_parameters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('syst_parameter_group_id')->nullable()->comment('');
            $table->foreign('syst_parameter_group_id')->references('id')->on('syst_parameter_groups')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->comment('');
            $table->string('code')->comment('');
            $table->string('riched_text')->nullable()->comment('');
            $table->string('value')->comment('');
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
        Schema::dropIfExists('syst_parameters');
        Schema::enableForeignKeyConstraints();
    }
}
