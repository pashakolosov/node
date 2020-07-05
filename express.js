const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.end('<h1>Hello express</h1>');
});


app.get('/home', (req, res) => {
    res.end('<h1>Hello Home</h1>');
});


app.get('/about', (req, res) => {
    res.end('<h1>About</h1>');
});


app.listen(3000, () => console.log('server has been started...'));