<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CompContactsTableSeeder extends Seeder

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

            DB::table('comp_contacts')->insert([

                'company_id' => $faker->numberBetween(1,30),
                'syst_position_id' => $faker->numberBetween(1,30),
                'name' => $faker->name,
                'phone' => $faker->phoneNumber,
                'email' => $faker->email,
                'main' => $faker->boolean(10),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
