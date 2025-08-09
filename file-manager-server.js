const http = require('http');
const fs = require('fs');
const path = require('path');


function listFiles(res) {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error reading directory');
            return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1>Files:</h1><ul>${files.map(f => `<li>${f}</li>`).join('')}</ul>`);
    });
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to File Manager</h1><a href="/files">View Files</a>');
    }
    else if (req.url === '/files') {
        listFiles(res);
    }
    else if (req.url.startsWith('/create')) {
        const filePath = path.join(__dirname, 'newFile.txt');
        fs.writeFile(filePath, 'Hello from File Manager!', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error creating file');
            } else {
                res.statusCode = 200;
                res.end(' File created successfully!');
            }
        });
    }
    else if (req.url.startsWith('/read')) {
        const filePath = path.join(__dirname, 'newFile.txt');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file');
            } else {
                res.statusCode = 200;
                res.end(` File Content: ${data}`);
            }
        });
    }
    else if (req.url.startsWith('/delete')) {
        const filePath = path.join(__dirname, 'newFile.txt');
        fs.unlink(filePath, (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error deleting file');
            } else {
                res.statusCode = 200;
                res.end(' File deleted successfully!');
            }
        });
    }
    else {
        res.statusCode = 404;
        res.end('404 - Page Not Found ');
    }
});


server.listen(3000, () => {
    console.log(' File Manager running on http://localhost:3000');
});
