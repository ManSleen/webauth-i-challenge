const express = require("express");

const helmet = require("helmet");

//Routers get made here
const AuthRouter = require("./auth/authRouter");

const server = express();

server.use(helmet);
server.use(express.json);

//Use routers here
server.use("/api", AuthRouter);

module.exports = server;
