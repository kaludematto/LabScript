import Exam from '../../../exams/typeorm/entities/exams';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('laboratory')
class Laboratory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  status: boolean;
  @ManyToMany(() => Exam, exams => exams.laboratories)
  exams: Exam[];
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Laboratory;
