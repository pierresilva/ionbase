<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompletedColumnToOperMovementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oper_movements', function (Blueprint $table) {
            //
            $table->boolean('completed')->default(false)->comment('bandera para saber si se completo la tarea');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oper_movements', function (Blueprint $table) {
            //
            $table->dropColumn('completed');
        });
    }
}
