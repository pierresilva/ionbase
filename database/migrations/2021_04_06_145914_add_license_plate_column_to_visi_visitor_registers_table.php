<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLicensePlateColumnToVisiVisitorRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('visi_visitor_registers', function (Blueprint $table) {
            //
            $table->string('license_plate')->nullable()->comment('Número de placa del vehículo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('visi_visitor_registers', function (Blueprint $table) {
            //
            $table->dropColumn('license_plate');
        });
    }
}
