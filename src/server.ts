import express, {NextFunction, Request, Response} from "express";
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


// Global Error Handler Middleware
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log error for debugging

  res.status(err.status || 500).json({
    title: "Error",
    message: err?.message || "Something went wrong!",
    status: err?.status || 500,
  })
});

// Handle server errors
server.on("error", (error: any) => {
  console.error("Error starting server", error);
});

export default server;