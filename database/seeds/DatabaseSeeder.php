<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call(UsersTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(PostTagTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(ImagesTableSeeder::class);
        $this->call(ImagePostTableSeeder::class);
    }
}
