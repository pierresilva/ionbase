<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperContractorsTableSeeder extends Seeder

{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        $faker = Faker\Factory::create();

        for($i=0;$i<30;$i++){

            DB::table('oper_contractors')->insert([

                'name' => $faker->name,
                'document' => $faker->randomNumber(8, true),
                'address' => $faker->address,
                'phone' => $faker->phoneNumber,
                'email' => $faker->email,
                'phone_support' => $faker->phoneNumber,
                'email_support' => $faker->email,
                'contact' => $faker->name,
                'business_hour' => $faker->paragraph(1, false),
                'phone_emergency' => $faker->phoneNumber,
                'email_emergency' => $faker->email,
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
