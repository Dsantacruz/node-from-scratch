var sId = setTimeout(function () {
    console.log("Corriendo...");
}, 1000);

clearTimeout(sId);

var valor = 0;

var sId = setInterval(function () {
    valor += 1;
    console.log(valor);

    if(valor == 5)
    {
        clearInterval(sId);
    }
}, 1000);