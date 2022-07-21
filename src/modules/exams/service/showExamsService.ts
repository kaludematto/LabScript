import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Exam from '@modules/exams/typeorm/entities/exams';
import { ExamsRepository } from '@modules/exams/typeorm/repository/examsRepository';

interface IExam {
  id: string;
}

class ShowExamsService {
  public async execute({ id }: IExam): Promise<Exam> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const exam = await examsRepository.findOne(id);
    if (!exam) {
      throw new AppError('Exam not found');
    }
    return exam;
  }
}

export default ShowExamsService;
