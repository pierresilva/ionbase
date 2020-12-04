<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SystRegionsTableSeeder extends Seeder

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

            DB::table('syst_regions')->insert([

                'name' => $faker->state,
                'code' => $faker->words(3, true),
                'syst_country_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
