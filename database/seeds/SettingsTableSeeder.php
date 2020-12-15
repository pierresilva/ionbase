<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SettingsTableSeeder extends Seeder

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

            DB::table('settings')->insert([

                'name' => $faker->words(3, true),
                'code' => $faker->words(3, true),
                'value' => $faker->paragraph(3),
                'rich_text' => $faker->boolean(),
                'setting_group_id' => $faker->numberBetween(1,30),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
