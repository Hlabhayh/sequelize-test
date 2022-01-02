import { Inject, Injectable } from '@nestjs/common';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_REPOSITORY') private users: typeof Users) {}

  public async getUsers(): Promise<any> {
    return this.users.findAll();
  }

  public async updateUser(id, body): Promise<any> {
    return this.users.update(body, { where: { owner_id: id } });
  }

  public async getUserById(id): Promise<any> {
    return this.users.findOne({ where: { owner_id: id } });
  }

  public async createUser(data): Promise<any> {
    return this.users.create(data);
  }

  public async deleteUser(id): Promise<any> {
    return this.users.destroy({ where: { owner_id: id } });
  }
}
