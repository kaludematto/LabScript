import Laboratory from '../../../laboratories/typeorm/entities/laboratory';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('exams')
class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  type: string;
  @Column()
  status: boolean;
  @ManyToMany(() => Laboratory, laboratories => laboratories.exams)
  @JoinTable()
  laboratories: Laboratory[];
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default Exam;
