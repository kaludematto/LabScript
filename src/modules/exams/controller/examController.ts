import CreateExamsService from '@modules/exams/service/createExamService';
import DeleteExamsService from '@modules/exams/service/deleteExamsService';
import ListExamsService from '@modules/exams/service/listExamsService';
import ShowExamsService from '@modules/exams/service/showExamsService';
import UpdateExamsService from '@modules/exams/service/updateExamsService';
import { Request, Response } from 'express';

export default class ExamsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listExams = new ListExamsService();
    const exams = await listExams.execute();
    return response.json(exams);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showExam = new ShowExamsService();
    const exam = await showExam.execute({ id });
    return response.json(exam);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, type, status } = request.body;
    const createExam = new CreateExamsService();
    const exam = await createExam.execute({
      name,
      type,
      status,
    });
    return response.json(exam);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, type, status } = request.body;
    const { id } = request.params;
    const updateExam = new UpdateExamsService();
    const exam = await updateExam.execute({
      id,
      name,
      type,
      status,
    });
    return response.json(exam);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteExam = new DeleteExamsService();
    await deleteExam.execute({ id });
    return response.json([]);
  }
}
