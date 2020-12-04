<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SystParametersTableSeeder extends Seeder

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

            DB::table('syst_parameters')->insert([

                'syst_parameter_group_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(2, true),
                'code' => $faker->words(2, true),
                'riched_text' => $faker->boolean(50),
                'value' => $faker->words(3, true),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
