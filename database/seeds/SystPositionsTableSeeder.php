<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SystPositionsTableSeeder extends Seeder

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

            DB::table('syst_positions')->insert([

                'name' => $faker->words(4, true),
                'code' => $faker->words(4, true),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
