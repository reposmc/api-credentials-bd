const {
  getCredentials,
  credentialsByFilter,
} = require("../controllers/credentials.controller");

module.exports = function (app, opts, done) {
  app.get("/status", (req, res) => {
    res.send({ message: "Active" });
  });

  // Credentials routes
  app.get("/credentials", getCredentials);
  app.post("/credentialsByFilter", credentialsByFilter);

  done();
};
