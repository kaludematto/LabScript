import examsRouter from '@modules/exams/routes/examRoutes';
import laboratoryRouter from '@modules/laboratories/routes/laboratoryRoutes';
import { Router } from 'express';

const routes = Router();

routes.use('/exams', examsRouter);
routes.use('/laboratories', laboratoryRouter);

export default routes;
