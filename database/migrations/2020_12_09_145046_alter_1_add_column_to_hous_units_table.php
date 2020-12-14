<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Alter1AddColumnToHousUnitsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('hous_units', function (Blueprint $table) {

            $table->bigIncrements('hous_unit_id')->nullable()->comment('');
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
        Schema::table('hous_units', function (Blueprint $table) {
            $table->dropColumn('hous_unit_id');

        });
        Schema::enableForeignKeyConstraints();
    }
}
