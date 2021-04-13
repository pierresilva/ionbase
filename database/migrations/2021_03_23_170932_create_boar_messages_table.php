<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoarMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boar_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('Nombre de la entrada del tablero');
            $table->string('code')->nullable()->unique()->comment('Código de la entrada del tablero');
            $table->string('file_id')->nullable()->comment('Imagen de la entrada del tablero');
            $table->longText('body')->nullable()->comment('Cuerpo de la entrada del tablero');
            $table->boolean('notify_to_users')->nullable()->comment('Indica si se envia una notificación a los usuarios');
            $table->boolean('notify_to_house_units')->nullable()->comment('Indica si se envia una notificación a las unidades habitacionales');
            $table->string('status')->default('active')->nullable()->comment('Estado de la entrada del tablero');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boar_messages');
    }
}
