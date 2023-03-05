const jwt = require("jsonwebtoken");
//DotEnv
const dotenv = require("dotenv");
const env = dotenv.config();
const libs = require("./../libs/functions");

const createToken = (req, res) => {
  const token = req.headers["x-access-token"];

  if (!libs.verifyToken(token)) {
    return res.status(401).send({ msg: "Token not provided or invalid." });
  }

  const newToken = jwt.sign({}, process.env.SECRET_TOKEN);

  return res.send({
    msg: "success",
    token: newToken,
  });
};

exports.createToken = createToken;
