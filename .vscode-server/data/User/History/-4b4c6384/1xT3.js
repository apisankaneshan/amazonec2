const express = require("express")
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

const app = express();

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


const videoServer = http.createServer(app)



// Start the server
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
