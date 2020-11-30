<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class ImagePostTableSeeder extends Seeder

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

            DB::table('image_post')->insert([

                'image_id' => $faker->numberBetween(1,30),
                'post_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
