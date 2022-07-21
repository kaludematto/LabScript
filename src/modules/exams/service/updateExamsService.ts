import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import Exam from '@modules/exams/typeorm/entities/exams';
import { ExamsRepository } from '@modules/exams/typeorm/repository/examsRepository';
import { appendFile } from 'fs';

interface IExam {
  id: string;
  name: string;
  type: string;
  status: boolean;
}

class UpdateExamsService {
  public async execute({ id, name, type, status }: IExam): Promise<Exam> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const exam = await examsRepository.findOne(id);

    if (!exam) {
      throw new AppError('Exam not found');
    }

    const examExists = await examsRepository.findByName(name);

    if (examExists && name !== exam.name) {
      throw new AppError('There is already a Esxam with this name!');
    }
    exam.name = name;
    exam.type = type;
    exam.status = status;

    await examsRepository.save(exam);
    return exam;
  }
}
export default UpdateExamsService;
