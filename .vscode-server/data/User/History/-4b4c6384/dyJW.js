// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const { spawn } = require('child_process');

// // Initialize Express app
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Serve static files (optional)
// app.use(express.static('public'));

// // Define route to serve HTML page
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Define WebSocket connection event
// io.on('connection', (socket) => {
//     console.log('A client connected');

//     // Spawn raspivid process to capture video
//     const raspividProcess = spawn('raspivid', ['-t', '0', '-w', '640', '-h', '480', '-fps', '25', '-b', '500000', '-o', '-']);

//     // Handle errors from raspivid process
//     raspividProcess.on('error', (err) => {
//         console.error('Error starting raspivid process:', err);
//         socket.disconnect(); // Disconnect client if there's an error
//     });

//     // Listen for data from raspivid process
//     raspividProcess.stdout.on('data', (data) => {
//         // Emit data to connected clients
//         io.emit('video-stream', data);
//     });

//     // Handle client disconnect
//     socket.on('disconnect', () => {
//         console.log('A client disconnected');
//         // Kill the raspivid process when no clients are connected
//         raspividProcess.kill();
//     });
// });

// // Start server
// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const app = express();
const http = require('http').createServer(app);

// Handle file uploads at /video-stream endpoint
app.post('/video-stream', (req, res) => {
    // Handle the video stream data here
    // You can save the received file or process it as needed
    console.log('Received video frame');
    res.sendStatus(200);
});

http.listen(3000, () => {
    console.log('Server is running on port 3000');
});
