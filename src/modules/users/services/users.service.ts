import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';
import { nanoid } from 'nanoid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException({
        error: `User #${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }
    return user;
  }

  create(payload: CreateUserDto) {
    const newUser: User = { id: nanoid(), ...payload };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, payload: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index < 0) {
      throw new NotFoundException({
        error: `User #${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }

    const user = this.findOne(id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return { message: 'Data correctly updated' };
  }

  delete(id: string) {
    const selectedUser = this.users.findIndex((user) => user.id === id);

    if (selectedUser < 0) {
      throw new NotFoundException({
        error: `User #${id} not found`,
        status: HttpStatus.NOT_FOUND,
      });
    }

    this.users.splice(selectedUser, 1);
    return { message: 'User deleted correctly' };
  }
}
