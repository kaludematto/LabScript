import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Exam from '@modules/exams/typeorm/entities/exams';
import { ExamsRepository } from '@modules/exams/typeorm/repository/examsRepository';

interface IExam {
  name: string;
  type: string;
  status: boolean;
}

class CreateExamsService {
  public async execute({ name, type, status }: IExam): Promise<Exam> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const examExists = await examsRepository.findByName(name);

    if (examExists) {
      throw new AppError('There is already a Exam with this name!');
    }

    const exam = examsRepository.create({
      name,
      type,
      status,
    });
    await examsRepository.save(exam);
    return exam;
  }
}
export default CreateExamsService;
