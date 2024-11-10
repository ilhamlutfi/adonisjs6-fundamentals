/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// optional parameters
router.get('/posts/:id?', ({ params }) => {
  if (!params.id) {
    return 'Showing all posts'
  }

  return `Showing post with id ${params.id}`
})

// Validate id to be numeric + cast to number data type
router.where('id', router.matchers.number())

// Validate id to be a valid UUID
router.where('id', router.matchers.uuid())

// Validate slug to match a given slug regex: regexr.com/64su0
router.where('slug', router.matchers.slug())


// group, prefix
router
  .group(() => {
    router.get('users', ({ view }) => {
      return view.render('users/index')
    })
    router.get('payments', () => {})
  })
  .prefix('/admin')

// GET method, named route
router.get('users', () => { }).as('user.index')

// GET method, named route, controller
router.get('users', [UserController, 'index']).as('user.index')

// POST method
router.post('users', () => {})

// PUT method
router.put('users/:id', () => {})

// PATCH method
router.patch('users/:id', () => {})

// DELETE method
router.delete('users/:id', () => {})

// Redirect to a route
router.on('/posts').redirect('/articles')

// Redirect to a URL
router.on('/posts').redirectToPath('https://youtube.com/@mubateknologi')

// Resources
 router.resource('/articles', () => {}).as('articles')





