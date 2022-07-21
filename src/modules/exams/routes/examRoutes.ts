import { Router } from 'express';
import ExamsController from '../controller/examController';

const examsRouter = Router();
const examsController = new ExamsController();

examsRouter.get('/', examsController.index);
examsRouter.get('/:id', examsController.show);
examsRouter.post('/', examsController.create);
examsRouter.put('/:id', examsController.update);
examsRouter.delete('/:id', examsController.delete);

export default examsRouter;
