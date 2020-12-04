<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class MailsTableSeeder extends Seeder

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

            DB::table('mails')->insert([

                'mail_template_id' => $faker->numberBetween(1,30),
                'subject' => $faker->words(3, true),
                'receiver' => $faker->email,
                'html' => $faker->paragraphs(3, true),
                'text' => $faker->paragraphs(3, true),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
