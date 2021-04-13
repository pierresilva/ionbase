<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $clients = \App\Client::all();

        $clients->each(function ($client) {
            \App\Facades\OnTheFly::setConnection($client->id);

            Schema::connection(\App\Facades\OnTheFly::getConnectionName())->create('orders', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->timestamps();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $clients = \App\Client::all();

        $clients->each(function ($client) {
            \App\Facades\OnTheFly::setConnection($client->id);

            Schema::connection(\App\Facades\OnTheFly::getConnectionName())->dropIfExists('orders');
        });
    }
}
