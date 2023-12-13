const http = require('http');
const path = require('path');
const render = require('./index.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`${render}`);
    res.end();
}).listen(5000);
