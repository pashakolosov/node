const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    console.log('Request:' + req.url);

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get("user-agent")}`;

    fs.appendFile('server_log2.log', data + '\n', () => {});

    next();
});

app.get('/', (req, res) => res.end('hello'));

app.listen(3000, () => console.log('server has been started...'));