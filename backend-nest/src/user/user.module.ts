import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categoria } from 'src/entities/categorias.entity';
import { tarea } from 'src/entities/tarea.entity';
import { users } from 'src/entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([users, tarea])],
    controllers: [UserController],
    providers: [UserService],
  })

  export class UserModule {}
