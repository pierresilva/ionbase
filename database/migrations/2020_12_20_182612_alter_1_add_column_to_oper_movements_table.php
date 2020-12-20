<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Alter1AddColumnToOperMovementsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('oper_movements', function (Blueprint $table) {

            $table->unsignedBigInteger('oper_schedule_id')->nullable();
            $table->foreign('oper_schedule_id')->references('id')->on('oper_schedules')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::table('oper_movements', function (Blueprint $table) {
            $table->dropForeign(['oper_schedule_id']);
            $table->dropColumn('oper_schedule_id');

        });
        Schema::enableForeignKeyConstraints();
    }
}
