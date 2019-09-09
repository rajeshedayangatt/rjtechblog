const express = require("express");
const app = express();
const port = 3000
app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('index');
});
app.get('/post', function (req, res) {
    res.render('post');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))