var fs = require("fs");

var config = JSON.parse(fs.readFileSync("archivo/config.json", "UTF-8"))

console.log(config);

//el primer parametro es el archvio que se va a revisar
fs.watchFile("archivos/config.json", function (actual, anterior){
    console.log("el archivo cambió");
    config = JSON.parse(fs.readFileSync("archivo/config.json", "UTF-8"))
    console.log(config);
} );