<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class PostTagTableSeeder extends Seeder

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

            DB::table('post_tag')->insert([

                'post_id' => $faker->numberBetween(1,30),
                'tag_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
