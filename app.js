require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes/UsersRoutes');
const routes = require('./routes/Restaurantsroutes');

mongoose.set("strictQuery", true);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const server = express()

server.use(express.static("public"))

server.use(express.json())

server.use('/api', routes)

server.listen(8000, () => {
    console.log("Server started...");
})