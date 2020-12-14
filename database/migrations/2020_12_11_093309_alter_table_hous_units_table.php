<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableHousUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('hous_units', function (Blueprint $table) {
            //
            $table->string('contact_first_name')->nullable();
            $table->string('contact_last_name')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('contact_email')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('hous_units', function (Blueprint $table) {
            //
            $table->dropColumn('contact_first_name');
            $table->dropColumn('contact_last_name');
            $table->dropColumn('contact_phone');
            $table->dropColumn('contact_email');
        });
    }
}
