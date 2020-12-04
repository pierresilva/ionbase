<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Alter6AddColumnToCounMeetingsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('coun_meetings', function (Blueprint $table) {

            $table->string('type')->nullable()->comment('');
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
        Schema::table('coun_meetings', function (Blueprint $table) {
            $table->dropColumn('type');

        });
        Schema::enableForeignKeyConstraints();
    }
}
