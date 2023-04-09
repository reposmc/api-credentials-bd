const {
  getCredentials,
  credentialsByFilter,
} = require("../controllers/credentials.controller");

module.exports = function (app, opts, done) {
  // Credentials routes
  app.get("/credentials", getCredentials);
  app.post("/credentialsByFilter", credentialsByFilter);

  done();
};
