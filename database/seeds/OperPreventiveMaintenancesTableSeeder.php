<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperPreventiveMaintenancesTableSeeder extends Seeder

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

            DB::table('oper_preventive_maintenances')->insert([

                'oper_machine_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(3),
                'date' => $faker->date('Y-m-d'),
                'time' => $faker->time('H:i:s'),
                'next' => $faker->date('Y-m-d', '2030-12-31'),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
