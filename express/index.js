var express = require("express");

var bodyParser = require("body-parser");

var app = express();

app.use('/virtual', express.static('public'));

//bodyparser lee las variables que son enviadas tipo post y las coloca ordenadamente en nuestro objeto llamado
app.use(bodyParser.urlencoded({extended : false}))

app.get("/", function (llamado, respuesta){
    console.log("Se hizo un llamado GET");
    respuesta.send("Hola desde Expres");
});

app.get('/form.html', function (llamado, respuesta) {
    respuesta.sendFile(__dirname + "/" + "form.html");
});

app.get("/get", function (llamado, respuesta) {
    var nombre = llamado.query.nombre;
    var apellido = llamado.query.apellido;

    respuesta.send("El nombre es: " + nombre + "<br/>" + "el apellido es:" + apellido);
});

app.post("/recibirPost", function (llamado, respuesta) {
    var nombre = llamado.body.nombre;
    var apellido = llamado.body.apellido;

    respuesta.send("El nombre es: " + nombre + "<br/>" + "el apellido es: " + apellido);
})

app.listen(3000, function () {
    console.log("Aplicación corriendo en el puerto 3000");
});