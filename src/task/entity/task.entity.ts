import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    default: 'todo',
  })
  status: 'todo' | 'complete';
}
