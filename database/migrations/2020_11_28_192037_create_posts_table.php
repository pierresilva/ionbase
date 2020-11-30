<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration

{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();

            $table->string('name')->comment('');
            $table->text('summary')->comment('');
            $table->unsignedBigInteger('user_id')->comment('');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('category_id')->comment('');
            $table->foreign('category_id')->references('id')->on('categories')->onUpdate('cascade')->onDelete('cascade');
            $table->boolean('published')->nullable()->comment('Is published post');
            $table->dateTime('from_date')->nullable()->comment('Publicado desde');
            $table->dateTime('to_date')->nullable()->comment('Publicado hasta');
            $table->boolean('accepted')->nullable()->comment('Aceptado');
            $table->date('promotion_date')->nullable()->comment('Fecha de promoción');
            $table->string('promotion_image')->nullable()->comment('Image promotion');
            $table->longText('content')->nullable()->comment('Post content');
            $table->string('code')->comment('Código del post');
            $table->string('status')->comment('Estado del post');
            $table->softDeletes();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('posts');
        Schema::enableForeignKeyConstraints();
    }
}
