var fs = require("fs");

var texto = "Aprende Node.js fácilmente";

//este es un método asincrónico 
fs.writeFile("archivo", texto, function (error) {
    if(error)
    {
        throw error;
    }
    else
    {
        console.log("El archivo fue creado");
    }
});

console.log("Comenzndo a escribir e archivo");