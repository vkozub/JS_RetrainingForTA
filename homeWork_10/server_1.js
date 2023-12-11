// ********************************** Task 1 ********************************

const http = require('http');
const os = require('os');
const path = require('path');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1>System information</h1>`);
    res.write(`<h3>Current user name: ${os.userInfo().username}</h3>`);
    res.write(`<h3>OS type: ${os.platform()}</h3>`);
    res.write(`<h3>System work time: ${(os.uptime()/60).toFixed(2)} minutes</h3>`);
    res.write(`<h3>Current working directory: ${path.dirname(__filename)}</h3>`);
    res.write(`<h3>Server file name: ${path.basename(__filename)}</h3>`);
    res.end();
}).listen(5000);
