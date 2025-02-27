import express from "express";
import handlers from "./handlers";

const server = express();

// Define a route handler for the default home page
server.get("/", handlers.welcome);

// Add routes for handling user data
server.get('/users', handlers.getAllUsers);
server.post('/users', handlers.addUser);
server.get('/users/:id', handlers.getUserById);
server.put('/users/:id', handlers.updateUser);
server.delete('/users/:id', handlers.deleteUser);

// Handle server errors
server.on("error", (error: any) => {
  console.error("Error starting server", error);
});

export default server;