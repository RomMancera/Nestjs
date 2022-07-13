import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tarea } from 'src/entities/tarea.entity';
import { users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateuserkDTO } from './dto/create.user';

@Injectable()
export class UserService {
    constructor(@InjectRepository(users)
                private User: Repository<users>,
                @InjectRepository(tarea)
                private tarea: Repository<tarea>){}

    async getAllUsers(){
        return await this.User.find(
        {
            relations: ['tareas']
        });
    }

    async createUser(newUserr: CreateuserkDTO){
        const newUser = new users();
        newUser.nombre = newUserr.nombre;
        newUser.apellido = newUserr.apellido;
        newUser.email = newUserr.email;
        newUser.password = newUserr.password;

        return await this.User.save(newUser);
    }

    async findOneUser(id: any){
        return await this.User.findOne(
            {
                relations: ['tareas'],
                where : {id: id}
            }
        );
    }

    async updateUser(newUser: CreateuserkDTO, id: any){
        const userUpdate = await this.User.findOneBy(
            {
                id:id
            }
        );
        userUpdate.nombre = newUser.nombre;
        userUpdate.apellido = newUser.apellido;
        userUpdate.email = newUser.email;
        userUpdate.password = newUser.password;

        return await this.User.save(userUpdate);
    }
  
    async deleteUser(id: any){
        return await this.User.delete(id);
    } 
}
