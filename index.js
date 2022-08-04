// const express = require('express');
// const app = express();
//
// app.use('/', express.static(__dirname + '/html'));
// app.get('/', function (req, res) {
//     res.render('index.html');
// });
//
// app.listen(8080, () => {
//     console.log('Listening on port 8080');
// });

const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World22!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);