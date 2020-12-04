<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCounMeetingsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('coun_meetings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->text('description')->nullable()->comment('');
            $table->string('date')->comment('');
            $table->string('hour')->nullable()->comment('');
            $table->string('place')->nullable()->comment('');
            $table->string('url')->nullable()->comment('');
            $table->longText('act')->nullable()->comment('');
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
        Schema::dropIfExists('coun_meetings');
        Schema::enableForeignKeyConstraints();
    }
}
