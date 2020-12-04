<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CompPhonesTableSeeder extends Seeder

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

            DB::table('comp_phones')->insert([

                'company_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(3, true),
                'number' => $faker->phoneNumber,
                'main' => $faker->boolean(10),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
