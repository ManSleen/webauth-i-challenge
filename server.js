const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

//Routers get made here
const UserRouter = require("./auth/userRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//Use routers here
server.use("/api", UserRouter);

module.exports = server;
