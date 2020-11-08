const express = require('express');
const socket = require('socket.io')

const app = express();

const server = app.listen(3333, () => {
    console.log('listening on port 3333');
})

app.use(express.static('public'));


const io = socket(server);


io.on('connection', (socket) => {
    console.log('connect');
    // Handle chat event
    socket.on('chat', (data) => {

        io.sockets.emit('chat', data);
    });


    // Handle typing event
    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data);
    });
})