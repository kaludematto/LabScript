import AppError from '@shared/errors/appError';
import { getCustomRepository } from 'typeorm';
import { LaboratoriesRepository } from '../typeorm/repository/laboratoriesRepository';
import Laboratory from '@modules/laboratories/typeorm/entities/laboratory';

interface ILaboratory {
  name: string;
  address: string;
  status: boolean;
}

class CreateLaboratoriesService {
  public async execute({
    name,
    address,
    status,
  }: ILaboratory): Promise<Laboratory> {
    const laboratoriesRepository = getCustomRepository(LaboratoriesRepository);
    const laboratoryExists = await laboratoriesRepository.findByName(name);

    if (laboratoryExists) {
      throw new AppError('There is already a Laboratory with this name!');
    }

    const laboratory = laboratoriesRepository.create({
      name,
      address,
      status,
    });
    await laboratoriesRepository.save(laboratory);
    return laboratory;
  }
}

export default CreateLaboratoriesService;
