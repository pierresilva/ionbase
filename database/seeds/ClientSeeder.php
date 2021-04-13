<?php

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(\App\Client::class, 5)->create()->each(function ($client, $key) {
            $client->database_database = implode('_', explode('-', $client->database_name));
            $client->save();

            $this->createSchema(implode('_', explode('-', $client->database_name)));
        });
    }

    function createSchema($schemaName)
    {
        // We will use the `statement` method from the connection class so that
        // we have access to parameter binding.
        return DB::connection('mysql')->statement('CREATE DATABASE ' . $schemaName);
    }
}
