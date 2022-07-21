import { EntityRepository, Repository } from 'typeorm';
import Exam from '../entities/exams';

@EntityRepository(Exam)
export class ExamsRepository extends Repository<Exam> {
  public async findByName(name: string): Promise<Exam | undefined> {
    const exam = this.findOne({
      where: {
        name,
      },
    });
    return exam;
  }
}

export default EntityRepository;
