<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::group(['prefix' => 'contacts'], function(){
    Route::get('all', [ContactController::class, "getAll"]);
    Route::get('{id?}', [ContactController::class, "getById"]);
    Route::post('/store', [ContactController::class, "store"]);
    Route::post('update', [ContactController::class, "update"]);
    Route::get('destroy/{id?}', [ContactController::class, "destroy"]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
