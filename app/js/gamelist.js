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

    let i;

    if(gamelist.hasAttribute("arcade"))
    {
        let filtered_json = find_in_object(JSON.parse(gamelist_json), {category: 'Arcade'});
        gamelist.style.backgroundColor = "#002d42";
        
        console.log(filtered_json);

    }
    if(gamelist.hasAttribute("sport"))
    {
        let filtered_json = find_in_object(JSON.parse(gamelist_json), {category: 'Sport'});
        gamelist.style.backgroundColor = "#002d42";
        console.log(filtered_json);
    }
});

//maybe a multiplayer later on but i really want to create a api for the multiplayer games first