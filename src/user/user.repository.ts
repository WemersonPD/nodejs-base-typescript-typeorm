import { getRepository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository {
  private userRepository = getRepository(User);
  async createUser(name: string) {
    const user = this.userRepository.create();
    user.name = name;
    try {
      await this.userRepository.save(user);
      return user;
    } catch {
      throw new Error('Erro ao salvar o usuario');
    }
  }
}
