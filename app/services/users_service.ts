import { inject } from '@adonisjs/core'

@inject()
export default class UserService {

  async getId(id: string) {
    return id
  }

}
