const express = require("express");
const helmet = require("helmet");

//Add routers

const server = express();

server.use(helmet());
server.use(express.json());

//use routers

module.exports = server;