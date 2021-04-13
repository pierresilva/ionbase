<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCurrentNumberColumnToInvoResolutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invo_resolutions', function (Blueprint $table) {
            //
            $table->integer('current_number')->nullable()->comment('Numero actual de facturación');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invo_resolutions', function (Blueprint $table) {
            //
            $table->dropColumn('current_number');
        });
    }
}
