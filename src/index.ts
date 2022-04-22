import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
Promise = require('bluebird')

import { Server } from "colyseus";
import { monitor } from "@colyseus/monitor";

const routes = require('./index.route');
import { PirateRoom } from "./rooms/PirateRoom";

dotenv.config()

const port = Number(process.env.PORT || 2567);
const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)

mongoose.Promise = Promise
const mongoUri = process.env.MONGO_HOST
mongoose?.connect(mongoUri)
mongoose?.connection.on('error', () => {
  console.log(`unable to connect to database: ${mongoUri}`)
})

const server = http.createServer(app);
const gameServer = new Server({
  server,
});

// register your room handlers
gameServer.define('PirateRoom', PirateRoom);

// register colyseus monitor AFTER registering your room handlers
app.use("/colyseus", monitor());

gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`)
