<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder

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

            DB::table('users')->insert([

                'syst_position_id' => $faker->numberBetween(1,30),
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('secret'),
                'first_name' => $faker->firstName(),
                'last_name' => $faker->lastName,
                'accept_terms_condition' => $faker->boolean(50),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
