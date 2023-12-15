const http = require('http');
const url = require('url');
const fs = require('fs');
const homePage = 'index.html';

http.createServer(function (req, res) {
    function errorCallback(err) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
    }

    function homePageCall(err, data) {
        errorCallback(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }

    function authorsCall() {
        let data = {
            authors: ['John Smith', 'John Green', 'Mark Poll', 'Adam Good', 'Simon Fennell']
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        return res.end();
    }

    function appFile(err, data) {
        errorCallback(err);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.end();
    }

    let filePath = url.parse(req.url, false).pathname;
    if (filePath === '/') { 
        filePath = "." + filePath + homePage;
        fs.readFile(filePath, homePageCall);
    } else if (filePath === '/authors') {
        authorsCall();
    } else if (filePath === '/app.js') {
        filePath = "." + filePath;
        fs.readFile(filePath, appFile);
    };
    
}).listen(5000);
