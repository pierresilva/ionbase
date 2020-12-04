<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperContractorsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('oper_contractors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->string('document')->comment('');
            $table->string('address')->nullable()->comment('');
            $table->string('phone')->nullable()->comment('');
            $table->string('email')->nullable()->comment('');
            $table->string('phone_support')->nullable()->comment('');
            $table->string('email_support')->nullable()->comment('');
            $table->string('contact')->nullable()->comment('');
            $table->string('business_hour')->nullable()->comment('');
            $table->string('phone_emergency')->nullable()->comment('');
            $table->string('email_emergency')->nullable()->comment('');
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
        Schema::dropIfExists('oper_contractors');
        Schema::enableForeignKeyConstraints();
    }
}
