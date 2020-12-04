<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperMovementsTableSeeder extends Seeder

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

            DB::table('oper_movements')->insert([

                'name' => $faker->words(4, true),
                'oper_sector_id' => $faker->numberBetween(1,30),
                'oper_contractor_id' => $faker->numberBetween(1,30),
                'date_statr' => $faker->date('Y-m-d'),
                'date_end' => $faker->date('Y-m-d'),
                'time_start' => $faker->time('H:i:s'),
                'time_end' => $faker->time('H:i:s'),
                'time_total' => '',
                'photo' => '',
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
