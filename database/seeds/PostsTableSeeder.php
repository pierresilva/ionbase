<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class PostsTableSeeder extends Seeder

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

            DB::table('posts')->insert([

                'name' => $faker->words(3, true),
                'summary' => $faker->paragraphs(3, true),
                'user_id' => $faker->numberBetween(1,30),
                'category_id' => $faker->numberBetween(1,30),
                'published' => $faker->boolean(80),
                'from_date' => $faker->date('Y-m-d H:i:s', 'now'),
                'to_date' => $faker->date('Y-m-d H:i:s', 'now'),
                'accepted' => $faker->boolean(50),
                'promotion_date' => $faker->date('Y-m-d', 'now'),
                'promotion_image' => $faker->imageUrl(480, 320, 'cats'),
                'content' => $faker->paragraphs(6, true),
                'code' => $faker->words(3, true),
                'status' => $faker->randomElement(['active','inactive']),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
