let mysql = require('mysql');
let conf = require('./config.json');

if(!conf.devmode){
  let con = mysql.createConnection({
    host: conf.database_host,
    user: conf.database_user,
    password: conf.database_pass
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
}
else
{
  console.log("devmode activated")
}