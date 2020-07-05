const express = require('express');
const { response } = require('express');

const app = express();


app.use((req, res, next) => {

    console.log('middleware1', req.url);
    next();
});
app.use((req, res, next) => {
    console.log('middleware2', req.url);
    res.send('middleware2');
});

app.get('/', (req, res) => {
    console.log('home');
    res.end('<h1>Hello</h1>')
})
app.listen(3000, () => console.log('server has been started on 3000 port...'))