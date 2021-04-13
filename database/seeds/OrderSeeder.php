<?php

use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $clients = \App\Client::all();

        $clients->each(function ($client) {
            \App\Facades\OnTheFly::setConnection($client->id);

            factory(\App\Models\Order::class, 100)->connection(\App\Facades\OnTheFly::getConnectionName())->create();
        });
    }
}
