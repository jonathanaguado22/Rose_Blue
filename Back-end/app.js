const express = require('express');
const {createServer} = require('http');


const server = express();

const app = createServer(server);

module.exports =  {app};