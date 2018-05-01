//Event emiter

var events = require("events");

var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.once("cansado", function (data) {
  console.log("El jugador esta cansado por primera vez");
});

ee.on("cansado", function (data) {
  console.log("El jugador esta cansado. El jugador es el número: " + data);
});

ee.on("herido", function (data) {
  console.log("El jugador esta herido");
});

ee.emit("cansado", "10");

ee.emit("cansado", "12");

//SI QUEREMOS DEJAR DE ESCUCHR TODOS LOS EVENTOS, NO SE LE ENVIA CADENA DENTRO DE PARENTESIS
ee.removeAllListeners("cansado");

ee.emit("cansado", "14");

ee.emit("herido");
