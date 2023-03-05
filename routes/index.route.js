const {
  getCredentials,
  credentialsByFilter,
} = require("../controllers/credentials.controller");

const { createToken } = require("../controllers/auth.controller");

module.exports = function (app, opts, done) {
  // Credentials routes
  app.get("/credentials", getCredentials);
  app.post("/credentialsByFilter", credentialsByFilter);

  // Auth routes
  app.get("/createToken", createToken);

  done();
};
