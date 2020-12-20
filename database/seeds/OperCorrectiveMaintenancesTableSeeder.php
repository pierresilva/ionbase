<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperCorrectiveMaintenancesTableSeeder extends Seeder

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

            DB::table('oper_corrective_maintenances')->insert([

                'name' => $faker->words(3),
                'oper_reason_id' => $faker->numberBetween(1,30),
                'hous_unit_area_id' => $faker->numberBetween(1,30),
                'detail' => $faker->paragraph(),
                'date' => $faker->date(),
                'time' => $faker->time(),
                'reported_by' => $faker->name,
                'status' => $faker->randomElement(['pending','resolved']),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
