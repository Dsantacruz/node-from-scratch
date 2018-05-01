var EventEmitter = require("events").EventEmitter;

//este modulo hereda la funcionalidad de una clase a otra clase
var util = require("util");

//emitir evento cada segundo (Reloj es una clase que se emite cada segundo)
var Reloj = function () {
    var self = this;
    setInterval(function (){
        self.emit("tick-tock");
    }, 1000);
};

//Reloj hereda la clase EventEmitter
//segundo paramtro es la clase de la cual vamos a heredar
util.inherits(Reloj, EventEmitter);

module.exports = Reloj;