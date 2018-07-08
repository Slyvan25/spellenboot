//prints image to webconsole so those sneaky wanna be hack people know shit is serious
console.log('%c       ', 'font-size: 100px; background: url("https://spellenboot.nl/img/logo.png") no-repeat; background-size: calc(100% - 12.5%); margin-left: 40%; margin-right: 40%;');
console.log('%c' + 'if you are reading this you most likely are a developer or an wanna be hacker. please dont use this console it will not give you extra permissions or anything.', 'color: #64bed8; margin-left: 25%; margin-right: 25%;');

//loads in the json file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function find_in_object(my_object, my_criteria){
    return my_object.filter(function(obj) {
      return Object.keys(my_criteria).every(function(c) {
        return obj[c] == my_criteria[c];
      });
    });
  }

readTextFile("../games/games.json", function(gamelist_json){

    let gamelist = document.getElementById("gamelist");

    /**
     *
     * Catagory Loading
     *  
     */

     //Arcade
    if(gamelist.hasAttribute("arcade")){
        let filtered_json = find_in_object(JSON.parse(gamelist_json), {category: 'Arcade'});
        //gamelist.style.backgroundColor = "#002d42";   - old
        for (let i = 0; i < filtered_json.length; i++) {
            let game = filtered_json[i];
            console.log("ARCADE::" + game.name + " loaded in to the site.");
            gamelist.innerHTML += "<a href='/game/"+ game.id +"'><img src='" + "/games/thumbnails/" +game.name + ".png" +"'></a>";
        }
    }

    if(gamelist.hasAttribute("sport")){
        let filtered_json = find_in_object(JSON.parse(gamelist_json), {category: 'Sport'});
        //gamelist.style.backgroundColor = "#002d42";   - old
        for (let i = 0; i < filtered_json.length; i++) {
            let game = filtered_json[i];
            console.log("Sport::" + game.name + " loaded in to the site.");
            gamelist.innerHTML += "<a href='/game/"+ game.id +"'><img src='" + "/games/thumbnails/" +game.name + ".png" +"'></a>";
        }
    }
});

//maybe a multiplayer later on but i really want to create a api for the multiplayer games first