const http = require("http");
const app = require('../app');

const PORT = process.env.port || 443;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});

