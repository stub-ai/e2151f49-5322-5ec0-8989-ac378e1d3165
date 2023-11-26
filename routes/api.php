Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout')->middleware('auth:api');

Route::apiResource('/tickets', 'TicketController')->middleware('auth:api');
Route::apiResource('/departments', 'DepartmentController')->middleware('auth:api');
Route::apiResource('/users', 'UserController')->middleware('auth:api');