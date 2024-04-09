const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Serve the HTML page
    if (req.url === '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

// Attach socket.io to the server
const io = socketIO(server);

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('Client connected');

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Listen for video feed from Raspberry Pi
const sio = require('socket.io-client');
const socketToRaspberryPi = sio.connect('http://192.168.137.221:RASPBERRY_PI_PORT');
socketToRaspberryPi.on('video_feed', (data) => {
    // Broadcast the video frame to all connected clients
    io.emit('video_frame', data);
});

// Start the server
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
