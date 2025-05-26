import { Router } from "express";
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Specific routes first
subscriptionRouter.get('/upcoming-renewals', authorize, (req, res) => res.send({ title: 'GET upcoming renewals' }));
subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

// Parameterized routes after
subscriptionRouter.get('/', authorize, (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.get('/:id', authorize, (req, res) => res.send({ title: 'GET subscription details' }));
subscriptionRouter.put('/:id', authorize, (req, res) => res.send({ title: 'UPDATE subscriptions' }));
subscriptionRouter.put('/:id/cancel', authorize, (req, res) => res.send({ title: 'CANCEL subscriptions' }));
subscriptionRouter.delete('/:id', authorize, (req, res) => res.send({ title: 'DELETE all subscriptions' }));

export default subscriptionRouter;
