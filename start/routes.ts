/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const PeopleController = () => import('#controllers/people_controller')
const StudentController = () => import('#controllers/backend/students_controller')

router.on('/').render('pages/home')

router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])

router.resource('people', PeopleController).as('peoples')

router.resource('students', StudentController).apiOnly()


