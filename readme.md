# Todo App Backend

## Description :

This is a Todo App built to help you manage your tasks efficiently. It supports user authentication (sign in and sign out) and performs full CRUD (Create, Read, Update, Delete) operations on todos. The app allows users to sign in, create new todos, view a list of their todos, update the status of tasks, and delete completed or unneeded tasks.

## Features :

### User Authentication:

- Sign in with email and password

- Sign out

### Todo CRUD Operations:

- Create a new todo

- Read a list of todos

- Update the status of a todo (e.g., mark as completed or not completed)

- Delete a todo

## Tech Stack :

- Backend: Node.js, Express.js

- Database: MongoDB

- Authentication: JWT (JSON Web Token) for secure sign in and session management

## Steps to Run Locally :

1 . Clone the repository:

- git clone = "URL"

- cd todo-app

2 . Install dependencies:

- npm install

3 . Set up environment variables: Create a .env file at the root of the project and add the following configuration:

- PORT=3000

- MONGO_URI= "\*\*\*\*"

- JWT_SECRET= \*\*\*\*

4 . Run the app:

- npm start

## API Endpoints

### 1. User Authentication

- Sign Up end point
- Sign In end point

### 2. Todo Operations

- create end point - to create a new todo

- read end point - to retrive all the todos

- update end point - to update the todo with the specified user id

- delete end point - to delete the todo with the respective todo id
