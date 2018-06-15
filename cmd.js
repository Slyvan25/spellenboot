const readline = require('readline');

// commandline
let rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    if(cmd == "/about")
    {
        console.log('This node js site web app is made by silvan paul')
    }
    if(cmd == "/update")
    {
        console.log('Site is updating');
    }
    //more if statements will get written here soon (got rid of the switch because of performance reasons)
  });