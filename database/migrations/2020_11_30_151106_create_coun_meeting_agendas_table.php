<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCounMeetingAgendasTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('coun_meeting_agendas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->string('order')->nullable()->comment('');
            $table->unsignedBigInteger('coun_meeting_id')->nullable()->comment('');
            $table->foreign('coun_meeting_id')->references('id')->on('coun_meetings')->onUpdate('cascade')->onDelete('cascade');
            $table->longText('content')->nullable()->comment('');
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
        Schema::dropIfExists('coun_meeting_agendas');
        Schema::enableForeignKeyConstraints();
    }
}
