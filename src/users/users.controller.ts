import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersResponse } from './users.response';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Get all users:
  @Get()
  @ApiTags('Users')
  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiResponse({
    status: 200,
    description: 'select all users',
    type: UsersResponse,
  })
  async getUsers() {
    return this.usersService.getUsers();
  }

  //Get user by ID:

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Get one user',
    type: UsersResponse,
  })
  @ApiTags('Users')
  @ApiOperation({ summary: 'Get user by Id' })
  async getById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  // Update user:
  @Put('/:id')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Update user' })
  @ApiBody({ type: UsersResponse })
  async updateUser(@Param('id') id: number, @Body() data: any) {
    return this.usersService.updateUser(id, data);
  }

  // Create user:
  @Post()
  @ApiTags('Users')
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiBody({ type: UsersResponse })
  async createUser(@Body() data: any) {
    return this.usersService.createUser(data);
  }

  //Delete user :
  @Delete('/:id')
  @ApiTags('Users')
  @ApiOperation({ summary: 'Delete one user' })
  async deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
