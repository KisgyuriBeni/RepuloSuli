<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            //$table->foreignId("course_id");
            $table->string("user_name");
            $table->string("email");
            $table->string("phone_number");
            $table->string("password");
            $table->string("first_name");
            $table->string("last_name");
            $table->string("mothers_name");
            $table->string("address");
            $table->date("birth_day");
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
