<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCounMeetingCitationsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('coun_meeting_citations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->unsignedBigInteger('coun_meeting_id')->nullable()->comment('');
            $table->foreign('coun_meeting_id')->references('id')->on('coun_meetings')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('coun_member_id')->nullable()->comment('');
            $table->foreign('coun_member_id')->references('id')->on('coun_members')->onUpdate('cascade')->onDelete('cascade');
            $table->string('name')->comment('');
            $table->boolean('attended')->nullable()->comment('');
            $table->boolean('signed')->nullable()->comment('');
            $table->longText('signature')->nullable()->comment('');
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
        Schema::dropIfExists('coun_meeting_citations');
        Schema::enableForeignKeyConstraints();
    }
}
