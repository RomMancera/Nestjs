import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categoria } from 'src/entities/categorias.entity';
import { tarea } from 'src/entities/tarea.entity';
import { users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateHomeworkDTO } from './dto/create-homework';

@Injectable()
export class TareaService {
    constructor(@InjectRepository(tarea)
                private tarea: Repository<tarea>,
                @InjectRepository(users)
                private user: Repository<users>,
                @InjectRepository(categoria)
                private categoria: Repository<categoria>){}

    async getAllHomeworks(){
        return await this.tarea.find(
        {
            relations: ['user']
        });
    }

    async createHomework(newHomework: CreateHomeworkDTO){
        let user = await this.user.findOneBy(
        {
            id: newHomework.idUser
        })
        let categoria = await this.categoria.findOneBy(
            {
                idCategoria: newHomework.idCate
            })
        const newHome = new tarea();
        newHome.categoria = categoria
        newHome.user = user;
        newHome.nombre = newHomework.nombre;
        newHome.description = newHomework.description;
        newHome.fecha = newHomework.fecha;
        newHome.type = newHomework.tipo;

        return await this.tarea.save(newHome);
    }

    async findOneHomework(id: any){
        return await this.tarea.findOne(
            {
                relations: ['user'],
                where: {id:id}
            }
        );
    }

    async updateHomeworkk(newHomew: CreateHomeworkDTO, id: any){
        const homeworkUpdate = await this.tarea.findOneBy(
            {
                id:id
            }
        );
        homeworkUpdate.nombre = newHomew.nombre;
        homeworkUpdate.description = newHomew.description;
        homeworkUpdate.fecha = newHomew.fecha;
        homeworkUpdate.type = newHomew.tipo;

        return await this.tarea.save(homeworkUpdate);
    }

    async deleteHomework(id: any){
        return await this.tarea.delete(id);
    }
}
