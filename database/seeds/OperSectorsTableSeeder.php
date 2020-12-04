<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperSectorsTableSeeder extends Seeder

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

            DB::table('oper_sectors')->insert([

                'name' => '',
                'code' => '',
                'hous_unit_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
