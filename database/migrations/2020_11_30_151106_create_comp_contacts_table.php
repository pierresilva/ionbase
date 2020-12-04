<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompContactsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('comp_contacts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('company_id')->nullable()->comment('');
            $table->foreign('company_id')->references('id')->on('companies')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('syst_position_id')->nullable()->comment('');
            $table->foreign('syst_position_id')->references('id')->on('syst_positions')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->comment('');
            $table->string('phone')->comment('');
            $table->string('email')->nullable()->comment('');
            $table->boolean('main')->nullable()->comment('');
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
        Schema::dropIfExists('comp_contacts');
        Schema::enableForeignKeyConstraints();
    }
}
