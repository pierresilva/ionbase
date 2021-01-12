<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNextColumnToOperSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oper_schedules', function (Blueprint $table) {
            //
            $table->date('next')->nullable()->comment('Fecha del siguiente mantenimiento');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oper_schedules', function (Blueprint $table) {
            //
            $table->dropColumn('next');
        });
    }
}
