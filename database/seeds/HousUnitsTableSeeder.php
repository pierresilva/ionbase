<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class HousUnitsTableSeeder extends Seeder

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

            DB::table('hous_units')->insert([

                'hous_unit_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(3, true),
                'code' => $faker->words(3, true),
                'contact_first_name' => $faker->firstName(),
                'contact_last_name' => $faker->lastName,
                'contact_phone' => $faker->phoneNumber,
                'contact_email' => $faker->email,
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
