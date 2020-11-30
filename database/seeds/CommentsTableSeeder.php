<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CommentsTableSeeder extends Seeder

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

            DB::table('comments')->insert([

                'name' => $faker->words(3, true),
                'body' => $faker->paragraph(3, true),
                'post_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
