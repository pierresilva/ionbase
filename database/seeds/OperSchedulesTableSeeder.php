<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperSchedulesTableSeeder extends Seeder

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

            DB::table('oper_schedules')->insert([

                'name' => $faker->words(3, true),
                'hous_unit_area_id' => $faker->numberBetween(1,30),
                'oper_sector_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
