import express from 'express';
import cookieParser from 'cookie-parser';
import { PORT } from './config/env.js';
import userRouter from './Routes/user.routes.js';
import authRouter from './Routes/auth.routes.js';
import subscriptionRouter from './Routes/subscription.routes.js';
import workflowRouter from './Routes/workflow.routes.js';
import connectToDatabase from './Database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflow', workflowRouter);

// Home route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the subscription tracker API'
    });
});

// Error handling
app.use(errorMiddleware);

// Handle 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
const startServer = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Subscription Tracker is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

export default app;