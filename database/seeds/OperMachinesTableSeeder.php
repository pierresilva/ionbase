<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperMachinesTableSeeder extends Seeder

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

            DB::table('oper_machines')->insert([

                'name' => $faker->word,
                'hous_unit_area_id' => $faker->numberBetween(1,30),
                'oper_contractor_id' => $faker->numberBetween(1,30),
                'contract_expiration_date' => $faker->date(),
                'contract_monthly_price' => $faker->randomNumber(8),
                'monthly_periodicity' => $faker->randomNumber(1),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
