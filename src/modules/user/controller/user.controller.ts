import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto, UpdateUserDto } from '../../../dtos/user.dtos';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return {
      data: this.userService.findAll(),
    };
  }

  @Get()
  getUser(@Param('userId') userId: string) {
    return this.userService.findOne(userId);
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() payload: UpdateUserDto) {
    return this.userService.update(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
