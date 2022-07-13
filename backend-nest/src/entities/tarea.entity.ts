import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { categoria } from './categorias.entity';
import { users } from './user.entity';

@Entity()
export class tarea {
  @PrimaryGeneratedColumn() id: number;
  @Column() nombre: string;
  @Column() description: string;
  @Column() fecha: string;
  @Column() type: number;
  @ManyToOne(()=>users, usuariochico => usuariochico.tareas,{onDelete: "SET NULL"}) user: users;
  @ManyToOne(()=>categoria, categoriaC => categoriaC.tareass, {onDelete: "SET NULL"}) categoria: categoria;
}