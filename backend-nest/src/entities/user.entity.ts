import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tarea } from './tarea.entity';

@Entity()
export class users {
  @PrimaryGeneratedColumn() id: number;
  @Column() nombre: string;
  @Column() apellido: string;
  @Column({unique : true}) email: string;
  @Column() password: string;
  @OneToMany(()=>tarea, tareachiquita => tareachiquita.user, {onDelete: "SET NULL"}) tareas: tarea[];
}