import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('labExams')
export default class LabExam {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  examsId: string;
  @Column()
  laboratoriesId: string;
}
