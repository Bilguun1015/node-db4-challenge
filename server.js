const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./recipe/recipe-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send('<h3>It is working!</h3>')
})


module.exports = server;