
# TutorX - Online Tutoring Platform

TutorX is a modern web application built to connect students with tutors for online learning. The platform facilitates easy scheduling of tutoring sessions, management of appointments, and sharing of success stories.

## Features

-  Tutor Registration and Profile Management
-  User Authentication and Authorization
-  Appointment Scheduling System
-  Contact Form for Inquiries
-  Success Stories Sharing
-  Dark/Light Theme Support
-  Responsive Design
-  Protected Routes
-  Video Carousel for Testimonials

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Shadcn UI components
- React Query for data fetching
- React Router for navigation
- React Hook Form for form handling
- Zod for form validation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS support

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TutorX-ADM
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Set up environment variables:
Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
# From the root directory
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

- `/src` - Frontend source code
  - `/components` - Reusable React components
  - `/contexts` - React context providers
  - `/hooks` - Custom React hooks
  - `/pages` - Page components
  - `/services` - API service functions
  - `/styles` - CSS modules and global styles

- `/backend` - Backend source code
  - `/config` - Configuration files
  - `/controllers` - Route controllers
  - `/middleware` - Express middleware
  - `/models` - Mongoose models
  - `/routes` - Express routes

## Available Scripts

Frontend:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

Backend:
- `npm run start` - Start production server
- `npm run dev` - Start development server with nodemon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


