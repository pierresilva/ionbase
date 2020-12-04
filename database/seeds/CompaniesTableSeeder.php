<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class CompaniesTableSeeder extends Seeder

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

            DB::table('companies')->insert([

                'name' => $faker->company,
                'code' => $faker->company,
                'nit' => $faker->randomNumber(8, true),
                'manager_name' => $faker->name,
                'manager_document' => $faker->randomNumber(8, true),
                'logo' => $faker->imageUrl(320, 320),
                'main' => $faker->boolean(10),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
