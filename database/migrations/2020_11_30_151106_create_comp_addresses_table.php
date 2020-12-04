<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompAddressesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('comp_addresses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('company_id')->nullable()->comment('');
            $table->foreign('company_id')->references('id')->on('companies')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->comment('');
            $table->unsignedBigInteger('syst_city_id')->nullable()->comment('');
            $table->foreign('syst_city_id')->references('id')->on('syst_cities')->onUpdate('cascade')->onDelete('cascade');
            $table->string('address')->comment('');
            $table->boolean('main')->comment('');
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
        Schema::dropIfExists('comp_addresses');
        Schema::enableForeignKeyConstraints();
    }
}
