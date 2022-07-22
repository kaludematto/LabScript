import { EntityRepository, Repository } from 'typeorm';
import LabExam from '../entities/labExam';

@EntityRepository(LabExam)
export class LabExamRepository extends Repository<LabExam> {
  public async findById(examsId: any): Promise<LabExam | undefined> {
    const labExam = this.findOne({
      where: {
        examsId,
      },
    });
    return labExam;
  }
}
