import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtRoleGuard } from 'src/auth/jwt-role.guard';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  getAllUsers(): any {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  async getUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.usersService.getUsersById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  @Delete(':id')
  @UseGuards(JwtRoleGuard)
  public async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.usersService.getUsersById(id)))
      throw new NotFoundException('User not found');
    await this.usersService.deleteUserById(id);
    return { success: true };
  }
}
