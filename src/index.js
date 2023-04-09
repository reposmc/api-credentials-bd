const Fastify = require("fastify");
require("dotenv").config();

// Initialize the database
require("./database/mongodb");

const routes = require("./routes/index.route");
const { registerService } = require("./libs/service");

// Creating server instance
const server = Fastify({ logger: true });

server.register(require("@fastify/cors"), {
  origin: true, // habilita todas las solicitudes CORS
  methods: ["GET", "PUT", "POST", "DELETE"], // métodos permitidos
});

// Routes
server.register(routes);

// Listener
server.listen(
  { port: process.env.PORT, host: process.env.SERVICE_NAME },
  async () => {
    await registerService();

    server.log.info("Server listening on port 3000");
  }
);
