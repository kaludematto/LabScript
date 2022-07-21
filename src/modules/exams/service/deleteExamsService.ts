import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { ExamsRepository } from '@modules/exams/typeorm/repository/examsRepository';

interface IDelete {
  id: string;
}

class DeleteExamsService {
  public async execute({ id }: IDelete): Promise<void> {
    const examsRepository = getCustomRepository(ExamsRepository);
    const exam = await examsRepository.findOne(id);

    if (!exam) {
      throw new AppError('Exam not found');
    }
    await examsRepository.remove(exam);
  }
}
export default DeleteExamsService;
