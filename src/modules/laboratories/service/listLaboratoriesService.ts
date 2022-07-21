import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { LaboratoriesRepository } from '../typeorm/repository/laboratoriesRepository';
import Laboratory from '@modules/laboratories/typeorm/entities/laboratory';

class ListLaboratoriesService {
  public async execute(): Promise<Laboratory[]> {
    const laboratoriesRepository = getCustomRepository(LaboratoriesRepository);
    const laboratories = laboratoriesRepository.find();
    return laboratories;
  }
}

export default ListLaboratoriesService;
