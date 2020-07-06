const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(`Запрашиваемый адрес: ${req.url.substr(1)}`)

    filePath = req.url.substr(1);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end('Response not found..');
        }
        else res.end(data);
    });
}).listen(3000, () => console.log('server has been started on 3000 port...'))