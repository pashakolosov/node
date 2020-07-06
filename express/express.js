const express = require('express');
const { response } = require('express');

const app = express();


app.use((req, res, next) => {

    console.log('middleware1', req.url);
    next();
});
app.use((req, res, next) => {
    console.log('middleware2', req.url);
    next();
});
app.use('/home', (req, res, next) => {
    console.log('about')
    res.send('<h1>Эта функция выполняется только при запросе /about</h1>')
})

app.get('/', (req, res) => {
    console.log('home');
    res.end('<h1>Hello</h1>');
});

app.listen(3000, () => console.log('server has been started on 3000 port...'))