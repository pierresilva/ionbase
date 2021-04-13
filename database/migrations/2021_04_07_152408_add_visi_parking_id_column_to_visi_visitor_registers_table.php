<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVisiParkingIdColumnToVisiVisitorRegistersTable extends Migration
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
            $table->unsignedBigInteger('visi_parking_id')->nullable()->comment('ID del parqueadero');
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
            $table->dropColumn('visi_parking_id');
        });
    }
}
