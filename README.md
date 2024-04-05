# Thread App

This is a simple Thread App implemented using NestJS for the backend and Angular for the frontend. The purpose of this project is to learn NestJS and Angular by creating a basic user and comment system.

## Features

- User endpoint: Allows creating, retrieving, updating, and deleting users.
- Comment endpoint: Allows creating, retrieving, updating, and deleting comments.
- Input validation for user and comment data.
- Angular frontend for interacting with the backend APIs.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Angular**: A TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.

## Installation

### Backend (NestJS)

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies
4. Run the development server
   npm run start:dev

### Frontend (Angular)

1. Navigate to the frontend directory
2. Install dependencies
3. Run the development server

## Usage

### Backend API Endpoints

- **Users**
  - `GET /users`: Retrieve all users.
  - `GET /users/:id`: Retrieve a user by ID.
  - `POST /users`: Create a new user.
  - `PUT /users/:id`: Update a user by ID.
  - `DELETE /users/:id`: Delete a user by ID.
- **Comments**
  - `GET /comments`: Retrieve all comments.
  - `GET /comments/:id`: Retrieve a comment by ID.
  - `POST /comments`: Create a new comment.
  - `PUT /comments/:id`: Update a comment by ID.
  - `DELETE /comments/:id`: Delete a comment by ID.
