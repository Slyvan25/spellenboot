const express = require('express')
const app = express()
const ejs = require('ejs')
const mysql = require('mysql');

const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

//custom modules
const db = require('./database.js');
const cmd = require('./cmd.js')

//json
const conf = require('./config.json');
const list = require('./app/games/games.json')

// sets template engine and path
app.set('view engine', 'ejs');
app.set('views', './app/views')
app.use(express.static(__dirname + '/app/'))
app.use(express.static(path.join(__dirname, "js")));


//web server
app.get("/", function(req, res){
    let i = 0;
    game = list[i++];
    res.render("index",{
        sitetitle: conf.app_name,
        sitemotto: conf.app_motto,
        analytics_id: conf.analytics_id,
        games : game,
        list : list
    })
})

//game page loads in game dynamicly
app.get('/game/:id', function(req, res) {
	let game = getGameInfo(req.params.id);
	if (!game) {// game not found
		console.log("404 game not found :)))");
		res.status(404).send('Sorry, we can not find that game in our special database of magicness, if you think this is an error, please file a report on our overlord slyvan.');
		return;
	}
    res.render('game',{
        "game" : game
    })
})

function getGameInfo(gameID) {
	for (let i = 0; i < list.length; i++) {
        let game = list[i];
        if (game.id == gameID) {
            return game;
        }
    }
	return null;
}


app.get("/admin", function(req, res){
    res.render("admin",{
        
        sitetitle: conf.app_name,
        sitemotto: conf.app_motto,
    })
})

//port number (if using iis use: process.env.PORT)
app.listen(conf.app_port);
