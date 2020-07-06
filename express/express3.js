const express = require('express');
const fs = require('fs');

const app = express();
app.use((req, res, next) => {

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let data = `${hour}:${minutes}:${seconds}
    ${req.method} ${req.url} ${req.get("user-agent")}`;
    console.log(data);
    fs.appendFile('server.log', data + '\n', (err) => {
        if (err) console.log(err);
    });
    next();
});


app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000, () => console.log('server has been sterted on 3000 port...'));



