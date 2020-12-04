<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Alter1CounMeetingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coun_meetings', function (Blueprint $table) {
            //
            $table->dropColumn('hour');
        });
        Schema::table('coun_meetings', function (Blueprint $table) {
            //
            $table->time('hour')->nullable()->comment('Hora de la junta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('coun_meetings', function (Blueprint $table) {
            //
            $table->dropColumn('hour');
        });
        Schema::table('coun_meetings', function (Blueprint $table) {
            //
            $table->string('hour')->nullable()->comment('Hora de la junta');
        });
    }
}
