<?php

use Illuminate\Http\Request;
use Rennokki\Larafy\Larafy;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/api-test', function(Request $request){
  $api = new Larafy();
  $foundAlbums = $api->setMarket('IT')->setLocale('it_IT')->getGenreSeeds();;
  // $foundAlbums = $api->searchAlbums('Master of Puppets');
    
  return response()->json($foundAlbums);
});
