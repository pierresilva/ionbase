<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class OperReplacementsTableSeeder extends Seeder

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

            DB::table('oper_replacements')->insert([

                'name' => $faker->words(3, true),
                'oper_machine_id' => $faker->numberBetween(1,30),
                'oper_contractor_id' => $faker->numberBetween(1,30),
                'date' => $faker->date('Y-m-d', 'now'),
                'time' => $faker->time('H:i:s', 'now'),
                'warranty' => $faker->paragraph(),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
