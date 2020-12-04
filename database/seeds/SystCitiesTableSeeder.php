<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SystCitiesTableSeeder extends Seeder

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

            DB::table('syst_cities')->insert([

                'name' => $faker->city,
                'code' => $faker->words(3, true),
                'syst_region_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
