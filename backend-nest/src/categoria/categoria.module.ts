import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from 'src/entities/categorias.entity';
import { tarea } from 'src/entities/tarea.entity';
import { CatergoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([categoria, tarea])],
  controllers: [CatergoriaController],
  providers: [ CategoriaService],
})
export class CatregoriaModule {}
