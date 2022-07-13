import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from 'src/entities/categorias.entity';
import { tarea } from 'src/entities/tarea.entity';
import { users } from 'src/entities/user.entity';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';

@Module({
  imports: [TypeOrmModule.forFeature([tarea, users, categoria])],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
