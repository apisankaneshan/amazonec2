// const express = require("express")
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');
const express = require("express");





// Create a server
const clientServer = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }
            console.log("successful response")
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

// const app = express();
const videoServer = http.createServer(app)

// Attach socket.io to the server
const io = socketIO(server);

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('Client connected');

    // Listen for video feed from Raspberry Pi
    socket.on('video_frame', (data) => {
        // Do something with the video data, like broadcasting it to other clients
        // For now, let's just log it
        console.log('Received video feed');
        io.emit('video_frame', data);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
