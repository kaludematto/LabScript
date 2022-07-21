import { Router } from 'express';
import LaboratoryController from '../controller/laboratoryController';

const laboratoryRouter = Router();
const laboratoryController = new LaboratoryController();

laboratoryRouter.get('/', laboratoryController.index);
laboratoryRouter.get('/:id', laboratoryController.show);
laboratoryRouter.post('/', laboratoryController.create);
laboratoryRouter.put('/:id', laboratoryController.update);
laboratoryRouter.delete('/:id', laboratoryController.delete);

export default laboratoryRouter;
