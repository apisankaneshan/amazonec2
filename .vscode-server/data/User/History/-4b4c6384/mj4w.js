const http = require('http');
const socketIO = require('socket.io');

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Socket server running');
});

// Attach socket.io to the server
const io = socketIO(server);

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('Client connected');

    // Listen for video feed from Raspberry Pi
    socket.on('video_feed', (data) => {
        // Do something with the video data, like broadcasting it to other clients
        // For now, let's just log it
        console.log('Received video feed');
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
