<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class MailTemplatesTableSeeder extends Seeder

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

            DB::table('mail_templates')->insert([

                'subject' => $faker->words(5, true),
                'mailable' => '',
                'html_template' => $faker->paragraphs(3, true),
                'text_template' => $faker->paragraphs(2, true),
            ]);
        }
        Schema::enableForeignKeyConstraints();
    }
}
