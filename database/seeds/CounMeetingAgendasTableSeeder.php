<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CounMeetingAgendasTableSeeder extends Seeder

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

            DB::table('coun_meeting_agendas')->insert([

                'name' => $faker->words(3, true),
                'order' => $faker->numberBetween(1, 100),
                'coun_meeting_id' => $faker->numberBetween(1,30),
                'content' => '',
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
