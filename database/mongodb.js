// Require external modules
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/credentials")
  .then(() => console.log("MongoDB connectedâ€¦"))
  .catch((err) => console.log(err));
