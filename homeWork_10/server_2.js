// ********************************** Task 2 ********************************

const http = require('http');
const os = require('os');
const greeting = require('./vkozuModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h3>Date of request: ${(new Date()).toString()}</h3>`);
    res.write(`<h3>${greeting(os.userInfo().username)}</h3>`);
    res.end();
}).listen(5000);
