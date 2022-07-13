import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateuserkDTO } from './dto/create.user';
import { UserService } from './user.service';
  
  
  @Controller('user')
  export class UserController {

    constructor(private userService : UserService){}
  
    @Get()
    getHomeworks(): any{
        return this.userService.getAllUsers();
    }
  
    @Get(':id')
    getOneHomework(@Param('id')id: any): any{
      return this.userService.findOneUser(id);
    }

    @Post('create')
    createUser(@Body() user: CreateuserkDTO) {
      this.userService.createUser(user);
      return 'usuario creado';
    }
  
    @Put(':id')
    UpdateUser(
      @Param('id') id: any,
      @Body() updateBody: CreateuserkDTO,
    ){
      this.userService.updateUser(updateBody,id);
      return 'usuario actualizado';
    }
  
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
      this.userService.deleteUser(id);
      return 'usuario eliminado'
    } 
  }
  