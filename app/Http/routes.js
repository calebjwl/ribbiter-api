'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/
//change

const Route = use('Route')

Route.on('/').render('welcome');

Route.post('/users', 'UserController').middleware('auth');

Route.get('/users', 'UserController.index').middleware('auth');

Route.post('/login', 'UserController.login');

Route.post('/posts', 'PostController.store').middleware('auth');

Route.get('/posts', 'PostController.index').middleware('auth');
