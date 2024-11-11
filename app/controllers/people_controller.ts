import type { HttpContext } from '@adonisjs/core/http'

export default class PeopleController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const people = [
      {
        name: 'John Doe',
        age: 30
      },
      {
        name: 'Jane Doe',
        age: 29
      },
    ]

    return view.render('peoples/index-layout', {
      data: people,
      active: true,
      title: 'List of Peoples'
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    return view.render('peoples/show', {
      id: params.id
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) { }

  async search({ request }: HttpContext) { }
}
