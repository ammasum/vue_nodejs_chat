const http = require('http');
const express = require('express');
const io = require('socket.io');

const port = process.env.PORT || 4200;
const app = express();
const server = http.createServer(app);
const socket = io(server);

socket.on('connection', (socket) => {
    console.log(socket.request.rawHeaders);
    socket.emit('pMessage', "Hello data");
});

server.listen(port, () => console.log(`Server start at http:localhost:${port}`));