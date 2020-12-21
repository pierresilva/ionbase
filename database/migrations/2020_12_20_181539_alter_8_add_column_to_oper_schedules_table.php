<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Alter8AddColumnToOperSchedulesTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('oper_schedules', function (Blueprint $table) {

            $table->boolean('repass')->nullable()->comment('');
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
        Schema::table('oper_schedules', function (Blueprint $table) {
            $table->dropColumn('repass');

        });
        Schema::enableForeignKeyConstraints();
    }
}