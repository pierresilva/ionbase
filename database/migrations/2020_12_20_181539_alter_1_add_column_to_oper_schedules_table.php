<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Alter1AddColumnToOperSchedulesTable extends Migration

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

            $table->unsignedBigInteger('oper_contractor_id')->nullable();
            $table->foreign('oper_contractor_id')->references('id')->on('oper_contractors')->onUpdate('cascade')->onDelete('cascade');
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
            $table->dropForeign(['oper_contractor_id']);
            $table->dropColumn('oper_contractor_id');

        });
        Schema::enableForeignKeyConstraints();
    }
}
