import { Router } from 'express'
import { setReminders } from '../controllers/workflow.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const workflowRouter = Router();

workflowRouter.post('/subscription/reminder', authorize, setReminders)

export default workflowRouter