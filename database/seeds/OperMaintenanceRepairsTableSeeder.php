<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperMaintenanceRepairsTableSeeder extends Seeder

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

            DB::table('oper_maintenance_repairs')->insert([

                'oper_corrective_maintenance_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(3),
                'date' => $faker->date(),
                'time' => $faker->time(),
                'completed_by' => $faker->name,
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
