import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { LaboratoriesRepository } from '../typeorm/repository/laboratoriesRepository';

interface IDelete {
  id: string;
}

class DeleteLaboratoriesService {
  public async execute({ id }: IDelete): Promise<void> {
    const laboratoriesRepository = getCustomRepository(LaboratoriesRepository);
    const laboratory = await laboratoriesRepository.findOne(id);

    if (!laboratory) {
      throw new AppError('Laboratory not found!');
    }
    await laboratoriesRepository.remove(laboratory);
  }
}

export default DeleteLaboratoriesService;
