import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tarea } from './tarea.entity';

@Entity()
export class categoria {
  @PrimaryGeneratedColumn() idCategoria: number;
  @Column() nombre: string;
  @Column() description: string;
  @OneToMany(()=>tarea, tareaG => tareaG.categoria,{onDelete: "SET NULL"}) tareass: tarea[];
}