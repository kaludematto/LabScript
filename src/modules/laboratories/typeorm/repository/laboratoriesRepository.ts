import { EntityRepository, Repository } from 'typeorm';
import Laboratory from '../entities/laboratory';

@EntityRepository(Laboratory)
export class LaboratoriesRepository extends Repository<Laboratory> {
  public async findByName(name: string): Promise<Laboratory | undefined> {
    const laboratory = this.findOne({
      where: {
        name,
      },
    });
    return laboratory;
  }
}

export default EntityRepository;
