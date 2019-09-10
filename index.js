const express = require("express");
const app = express();
const port = 3000
app.set('view engine', 'pug')
app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('index');
});
app.get('/article/:articleid', function (req, res) {

    var article = req.params.articleid;

    if(article == "how-to-install-vue2") {

        res.render('article/vuejs/how_to_install_vue2');

    }else if(article == "how-to-install-vue2-npm"){

        res.render('article/vuejs/how_to_install_vue2_npm');
    }
    else if(article == "how-to-install-vue2-vue-cli"){

        res.render('article/vuejs/how_to_install_vue2_cli');
    }
    
    
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))