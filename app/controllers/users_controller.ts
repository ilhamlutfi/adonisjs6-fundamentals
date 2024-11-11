import { inject } from '@adonisjs/core'
import UserService from '#services/users_service'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {

  constructor(private userService: UserService) {}

  async index({ view }: HttpContext) {
    return view.render('users/index', {
      title: 'All Users',
    })
  }

  async show({ request, response }: HttpContext) {

    const ip = request.ip()

    return response.send(`User ip is ${ip}`)
  }

}
