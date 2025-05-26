# Subscription Tracker API

A RESTful API for managing subscription services and sending renewal reminders.

## Features

- User Authentication (Sign up, Sign in)
- Subscription Management (Create, Read, Update, Delete)
- Automated Renewal Reminders
- MongoDB Atlas Integration
- JWT-based Authentication
- Error Handling Middleware

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- Dayjs for date handling
- Upstash for workflow management

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd subscription-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Create environment files:
   Create `.env.development.local` for development and `.env.production.local` for production with the following variables:
```env
PORT=3000
NODE_ENV=development/production
DB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development/production
QSTASH_TOKEN=your_qstash_token
QSTASH_URL=your_qstash_url
SERVER_URL=http://localhost:3000
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication
- POST `/api/v1/auth/signup` - Register a new user
- POST `/api/v1/auth/signin` - Login user
- POST `/api/v1/auth/signout` - Logout user

### Subscriptions
- GET `/api/v1/subscriptions` - Get all subscriptions
- POST `/api/v1/subscriptions` - Create new subscription
- GET `/api/v1/subscriptions/:id` - Get subscription details
- PUT `/api/v1/subscriptions/:id` - Update subscription
- DELETE `/api/v1/subscriptions/:id` - Delete subscription
- GET `/api/v1/subscriptions/user/:id` - Get user's subscriptions
- PUT `/api/v1/subscriptions/:id/cancel` - Cancel subscription
- GET `/api/v1/subscriptions/upcoming-renewals` - Get upcoming renewals

### Workflow
- POST `/api/v1/workflow/subscription/reminder` - Set subscription reminders

## License

MIT 