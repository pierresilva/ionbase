<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CounMeetingsTableSeeder extends Seeder

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

            DB::table('coun_meetings')->insert([

                'name' => $faker->words(4, true),
                'description' => $faker->paragraphs(3, true),
                'date' => $faker->date('Y-m-d'),
                'hour' => $faker->time('H:i:s'),
                'place' => $faker->words(3, true),
                'url' => $faker->url,
                'act' => '',
                'status' => $faker->randomElement(['active','inactive','in_progress','finalized']),
                'start_content' => $faker->paragraphs(3, true),
                'end_content' => $faker->paragraphs(3, true),
                'consecutive' => $faker->randomNumber(8, true),
                'type' => $faker->randomElement(['coexistence','council']),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
