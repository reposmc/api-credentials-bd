const Fastify = require("fastify");
require("dotenv").config();

// Initialize the database
require("./database/mongodb");

const routes = require("./routes/index.route");

// Creating server instance
const server = Fastify({ logger: true });

// Routes
server.register(routes);

// Listener
server.listen({ port: "3000", host: "0.0.0.0" }, () => {
  server.log.info("Server listening on port 3000");
});
