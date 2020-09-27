import { Request } from 'express';
import { UserService } from './user.service';

export class UserController {
  private userService = new UserService();
  async save(request: Request) {
    const { name } = request.body;
    return await this.userService.createUser(name);
  }
}
