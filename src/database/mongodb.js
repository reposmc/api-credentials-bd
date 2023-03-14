// Require external modules
const mongoose = require("mongoose");

// Connect to DB
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
  )
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));
