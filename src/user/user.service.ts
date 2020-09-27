import { UserRepository } from './user.repository';
export class UserService {
  private userRepo = new UserRepository();

  public async createUser(name: string) {
    return this.userRepo.createUser(name);
  }
}
