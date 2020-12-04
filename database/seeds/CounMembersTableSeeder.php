<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CounMembersTableSeeder extends Seeder

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

            DB::table('coun_members')->insert([

                'name' => $faker->words(3, true),
                'user_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
