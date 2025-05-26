# Subscription Tracker API

A RESTful API for managing subscription services and sending renewal reminders. Track your subscriptions, get notifications before renewals, and manage your recurring payments efficiently.

## Features

- User Authentication (Sign up, Sign in)
- Subscription Management (Create, Read, Update, Delete)
- Automatic Renewal Date Calculation
- MongoDB Atlas Integration
- JWT-based Authentication
- Error Handling Middleware
- Input Validation
- Secure Password Hashing

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- dayjs for date handling

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Dilip-lamichhane/Subscription-Tracker-API.git
cd Subscription-Tracker-API
```

2. Install dependencies:
```bash
npm install
```

3. Create environment files:
   Create `.env.development.local` for development and `.env.production.local` for production with the following variables:
```env
PORT=5500
NODE_ENV=development/production
DB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Documentation

### Authentication Endpoints

#### Sign Up
```http
POST /api/v1/auth/signup
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your.email@example.com",
  "password": "yourpassword123"
}
```

#### Sign In
```http
POST /api/v1/auth/signin
Content-Type: application/json

{
  "email": "your.email@example.com",
  "password": "yourpassword123"
}
```

### Subscription Endpoints

#### Create Subscription
```http
POST /api/v1/subscriptions
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "name": "Netflix",
  "price": 15.99,
  "currency": "USD",
  "frequency": "Monthly",
  "category": "Entertainment",
  "paymentMethod": "Credit Card",
  "startDate": "2024-02-20"
}
```

#### Get User's Subscriptions
```http
GET /api/v1/subscriptions/user/:userId
Authorization: Bearer YOUR_JWT_TOKEN
```

### Data Models

#### Subscription Model
- name (String, required)
- price (Number, required)
- currency (String, enum: ['USD', 'EUR', 'NPR'])
- frequency (String, enum: ['Daily', 'Monthly', 'Yearly'])
- category (String, enum: ['Sports', 'News', 'Entertainment', 'Lifestyle', 'Technology', 'Finance', 'Politics', 'Other'])
- paymentMethod (String, required)
- status (String, enum: ['active', 'cancelled', 'expired'])
- startDate (Date, required)
- renewalDate (Date, auto-calculated)
- user (ObjectId, reference to User)

#### User Model
- name (String, required)
- email (String, required, unique)
- password (String, required, hashed)

## Error Handling

The API includes comprehensive error handling for:
- Validation errors
- Authentication errors
- Database errors
- Not found errors
- Server errors

Each error response follows the format:
```json
{
  "success": false,
  "error": "Error message here"
}
```

## Success Responses

All successful responses follow the format:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

## License

MIT 