import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { LaboratoriesRepository } from '../typeorm/repository/laboratoriesRepository';
import Laboratory from '@modules/laboratories/typeorm/entities/laboratory';

interface ILaboratory {
  id: string;
}

class ShowLaboratoriesService {
  public async execute({ id }: ILaboratory): Promise<Laboratory> {
    const laboratoriesRepository = getCustomRepository(LaboratoriesRepository);
    const laboratory = await laboratoriesRepository.findOne(id);
    if (!laboratory) {
      throw new AppError('Laboratory not found!');
    }
    return laboratory;
  }
}

export default ShowLaboratoriesService;
