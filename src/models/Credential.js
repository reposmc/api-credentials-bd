// External Dependancies
const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
  database: String,
  host: String,
  driver: String,
  port: Number,
  user: String,
  password: String,
  automaticMount: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Credential", credentialSchema);
