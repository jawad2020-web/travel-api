/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
  return { hello: 'world' };
});

// import "./auth.routes";
// import "./users.routes";
// import "./roles.routes";
// import "./permissions.routes";
// import "./products.routes";

import './api/user';
import './api/hotels';
import './api/room';
import './api/company';
import './api/booking';
import './api/auth';
import './api/acl/roles';
import './api/acl/permissions';
