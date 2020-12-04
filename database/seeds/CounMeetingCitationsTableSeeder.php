<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CounMeetingCitationsTableSeeder extends Seeder

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

            DB::table('coun_meeting_citations')->insert([

                'coun_meeting_id' => $faker->numberBetween(1,30),
                'user_id' => $faker->numberBetween(1,30),
                'coun_member_id' => $faker->numberBetween(1,30),
                'name' => $faker->words(5, true),
                'attended' => $faker->boolean(50),
                'signed' => $faker->boolean(),
                'signature' => $faker->imageUrl(320, 240),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
