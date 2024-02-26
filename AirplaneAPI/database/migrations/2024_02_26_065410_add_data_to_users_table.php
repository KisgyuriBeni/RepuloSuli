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
        Schema::table('users', function (Blueprint $table) {
            $table->string("phone_number");
            $table->string("first_name");
            $table->string("last_name");
            $table->string("mothers_name");
            $table->string("address");
            $table->date("birth_day");
            $table->integer("login_attempt")->default(0);
            $table->timestamp("banned_time")->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
