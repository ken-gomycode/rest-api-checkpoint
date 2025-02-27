import Database from "./database";
import server from "./server";
import config from './config';

/**
 * Initializes the application by connecting to the database and starting the server.
 *
 * @async
 * @function initialize
 * @returns {Promise<void>} A promise that resolves when the initialization is complete.
 */
const initialize = async (): Promise<void> => {
  // Attempt to connect to the database
  const connected = await Database.connect();
  if (!connected) {
    console.error("Failed to connect to database");
  }

  // Start the server and listen on the configured port
  server.listen(config.PORT, () => {
    console.log("Server is running on port 3000");
  });
};

// Start Application
initialize().finally();

