const express = require('express');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let data = `${hour}:${minutes}:${seconds}'\n'
    ${req.method}${req.url}${req.get('user-agent')}`;
    
    console.log(data);

    fs.appendFileSync('logs.log', data);
    next();
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => console.log('server has been started on 3000 port...'))