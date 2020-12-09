<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CorrPacketsTableSeeder extends Seeder

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

            DB::table('corr_packets')->insert([

                'name' => $faker->words(3,true),
                'hous_unit_id' => $faker->numberBetween(1,30),
                'conveyor' => $faker->company,
                'guide_number' => $faker->randomNumber(8, true),
                'received_at' => $faker->date('Y-m-d H:i:s','now'),
                'received_comment' => $faker->paragraph(3, true),
                'delivered_at' => $faker->date('Y-m-d H:i:s'),
                'delivered_to' => $faker->name,
                'delivered_signature' => $faker->imageUrl(320, 320),
                'delivered_comment' => $faker->paragraph(3),
                'status' => $faker->randomElement(['received','delivered']),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
