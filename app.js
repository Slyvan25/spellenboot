const express = require('express')
const app = express()
const conf = require('./config.json');
const ejs = require('ejs')

app.set('view engine', 'ejs');
app.set('views', './app/views')
app.use(express.static(__dirname + '/app/'))

app.get("/", function(req, res){
    res.render("index",{
        sitetitle: conf.app_name,
        sitemotto: conf.app_motto,
    })
})

app.listen(conf.app_port);