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


Route::get('/genres', function(Request $request){

  $api = new Larafy();

  $genres = $api->setMarket('IT')->setLocale('it_IT')->getGenreSeeds();

  return response()->json($genres);
});

Route::get('/artists/{name}', function(Request $request){


  $api = new Larafy();

  $foundArtists = $api->setMarket('IT')->setLocale('it_IT')->searchArtists($request->name);

  return response()->json($foundArtists->items);
});

Route::get('/track/{title}', function(Request $request){

  $api = new Larafy();

  $foundSongs = $api->setMarket('IT')->setLocale('it_IT')->searchTracks($request->title);

  return response()->json($foundSongs->items);
});

Route::get('/categories', function(Request $request){

  $api = new Larafy();

  $allCategories = $api->setMarket('IT')->setLocale('it_IT')->getBrowseCategories(40);

  return response()->json($allCategories->items);
});

Route::get('/category/{name}', function(Request $request){

  $api = new Larafy();

  $foundCategory = [
    'details' => $api->setMarket('IT')->setLocale('it_IT')->getBrowseCategory($request->name),
    'playlists' => $api->setMarket('IT')->setLocale('it_IT')->getCategoryPlaylists($request->name)
  ];

  return response()->json($foundCategory);
});
