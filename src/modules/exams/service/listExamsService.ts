import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Exam from '@modules/exams/typeorm/entities/exams';
import { ExamsRepository } from '@modules/exams/typeorm/repository/examsRepository';

class ListExamsService {
  public async execute(): Promise<Exam[]> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const exams = examsRepository.find();
    return exams;
  }
}

export default ListExamsService;
