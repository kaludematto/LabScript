import { Request, Response } from 'express';
import CreateLaboratoriesService from '../service/createLaboratoriesService';
import DeleteLaboratoriesService from '../service/deleteLaboratoriesService';
import ListLaboratoriesService from '../service/listLaboratoriesService';
import ShowLaboratoriesService from '../service/showLaboratoriesService';
import UpdateLaboratoriesService from '../service/updateLaboratoriesService';

export default class LaboratoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listLaboratories = new ListLaboratoriesService();
    const laboratory = await listLaboratories.execute();
    return response.json(laboratory);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showLaboratory = new ShowLaboratoriesService();
    const laboratory = await showLaboratory.execute({ id });
    return response.json(laboratory);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, address, status } = request.body;
    const createLaboratory = new CreateLaboratoriesService();
    const laboratory = await createLaboratory.execute({
      name,
      address,
      status,
    });
    return response.json(laboratory);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, address, status } = request.body;
    const { id } = request.params;
    const updateLaboratory = new UpdateLaboratoriesService();
    const laboratory = await updateLaboratory.execute({
      id,
      name,
      address,
      status,
    });
    return response.json(laboratory);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteLaboratory = new DeleteLaboratoriesService();
    await deleteLaboratory.execute({ id });
    return response.json([]);
  }
}
