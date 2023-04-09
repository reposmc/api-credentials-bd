const Credential = require("../models/Credential");
const libs = require("../libs/functions");
const server = require("fastify");

/**
 *  Gets all the credentials from the database.
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getCredentials = async (req, res) => {
  // const token = req.headers["x-access-token"];

  // if (!libs.verifyToken(token)) {
  //   return res.status(401).send({ msg: "Token not provided or invalid." });
  // }

  const credentials = await Credential.find(req.body);

  return res.send({
    msg: "Correcto",
    data: credentials,
  });
};

/**
 *  Get credentials from the database with the given filters.
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const credentialsByFilter = async (req, res) => {
  // const token = req.headers["x-access-token"];
  // console.log(token);

  // if (!libs.verifyToken(token)) {
  //   return res.status(401).send({ msg: "Token not provided or invalid." });
  // }

  const credentials = await Credential.find(req.body);

  return res.send({
    msg: "Correcto",
    data: credentials,
  });
};

module.exports = {
  getCredentials,
  credentialsByFilter,
};
