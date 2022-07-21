import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { LaboratoriesRepository } from '../typeorm/repository/laboratoriesRepository';
import Laboratory from '@modules/laboratories/typeorm/entities/laboratory';

interface ILaboratory {
  id: string;
  name: string;
  address: string;
  status: boolean;
}

class UpdateLaboratoriesService {
  public async execute({
    id,
    name,
    address,
    status,
  }: ILaboratory): Promise<Laboratory> {
    const laboratoriesRepository = getCustomRepository(LaboratoriesRepository);
    const laboratory = await laboratoriesRepository.findOne(id);

    if (!laboratory) {
      throw new AppError('Laboratory not found!');
    }

    const laboratoryExists = await laboratoriesRepository.findByName(name);

    if (laboratoryExists && name !== laboratory.name) {
      throw new AppError('There is already a Laboratory with this name!');
    }
    laboratory.name = name;
    laboratory.address = address;
    laboratory.status = status;

    await laboratoriesRepository.save(laboratory);
    return laboratory;
  }
}

export default UpdateLaboratoriesService;
