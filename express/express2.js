const express = require('express');
const { readFileSync } = require('fs')

const app = express();


app.use(req, res, next => {
    data = now.data();
    console.log(data);
    next();
})


app.get('/home', (req, res) => {
    console.log(req.url);
    file = readFileSync('./html/index.html');
    res.end(file);
});

app.listen(3000, () => console.log('server has been started...'))