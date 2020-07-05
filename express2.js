const express = require('express');
const { readFileSync } = require('fs')

const app = express();



app.get('/home', (req, res) => {
    console.log(req.url);
    file = readFileSync('./html/index.html');
    res.end(file);
});

app.listen(3000, () => console.log('server has been started...'))