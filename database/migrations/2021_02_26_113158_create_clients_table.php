<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable()->comment('Nombre o razon social del cliente');
            $table->string('identification')->nullable()->comment('Identificación del cliente');
            $table->string('phone')->nullable()->comment('Teléfono del cliente');
            $table->string('address')->nullable()->comment('Direccion del cliente');
            $table->string('country_id')->nullable()->comment('Identificador del pais del cliente');
            $table->string('region_id')->nullable()->comment('Identificador de la región del cliente');
            $table->string('city_id')->nullable()->comment('Identificador de la ciudad del cliente');
            $table->string('contact_name')->nullable()->comment('Nombre del contacto');
            $table->string('contact_phone')->nullable()->comment('Teléfono del contacto');
            $table->string('contact_email')->nullable()->comment('Email del contacto');
            $table->string('database_name')->comment('Nombre de la conexión a DB');
            $table->string('database_host')->comment('Host de la conexión a DB');
            $table->string('database_port')->comment('Puerto de la conexión a DB');
            $table->string('database_username')->comment('Nombre de usuario de la conexión a DB');
            $table->string('database_password')->comment('Contraseña de la conexión a DB');
            $table->string('database_database')->nullable()->comment('Nombre de la base de datos de la conexión a DB');
            $table->string('email_mailer')->nullable()->comment('Protocolo de comunicación Email');
            $table->string('email_host')->nullable()->comment('Host email');
            $table->string('email_port')->nullable()->comment('Puerto Email');
            $table->string('email_username')->nullable()->comment('Nombre de usuario Email');
            $table->string('email_password')->nullable()->comment('Contraseña Email');
            $table->string('email_encryption')->nullable()->comment('Protocolo de encriptación Email');
            $table->string('email_from_address')->nullable()->comment('Correo electrónico a mostrar Email');
            $table->string('email_from_nombre')->nullable()->comment('Nombre a mostrar Email');
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
        Schema::dropIfExists('clients');
    }
}
