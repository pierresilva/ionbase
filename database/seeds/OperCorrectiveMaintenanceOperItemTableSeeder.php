<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperCorrectiveMaintenanceOperItemTableSeeder extends Seeder

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

            DB::table('oper_corrective_maintenance_oper_item')->insert([

                'oper_corrective_maintenance_id' => $faker->numberBetween(1,30),
                'oper_item_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
