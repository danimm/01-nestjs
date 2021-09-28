import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dtos';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return {
      data: this.usersService.findAll(),
    };
  }

  @Get()
  getUser(@Param('userId') userId: string) {
    return this.usersService.findOne(userId);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
