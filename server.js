const Fastify = require("fastify");
const routes = require("./routes/index.route");

// Initialize the database
require("./database/mongodb");

// Creating server instance
const server = Fastify({ logger: true });

// Routes
server.register(routes);

// Listener
server.listen({ port: "3000" }, () => {
  server.log.info("Server listening on port 3000");
});
