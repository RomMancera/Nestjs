import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categoria } from 'src/entities/categorias.entity';
import { tarea } from 'src/entities/tarea.entity';
import { users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCateDTO } from './dto/create.categoria.dto';
CreateCateDTO

@Injectable()
export class CategoriaService {
    constructor(@InjectRepository(tarea)
                 private tarea: Repository<tarea>, 
                @InjectRepository(categoria) 
                private categoria: Repository<categoria>){}
 
    async getAllCategorias(){
        return await this.categoria.find(
        {
            relations: ['tarea']
        } );
    }

    async createCate(newCategoria: CreateCateDTO){
        const newCateg = new categoria();
        newCateg.nombre = newCategoria.nombre;
        newCateg.description = newCategoria.descripcion;

        return await this.categoria.save(newCateg);
    }

/*
    

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
*/
    async deleteCate(id: any){
        return await this.categoria.delete(id);
    } 
}
