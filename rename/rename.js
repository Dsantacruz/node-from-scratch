var fs = require("fs");

fs.rename("test1/test3", "test1/test4", function (error) {
    if(error)
    {
        throw error;
    }
    else
    {
        console.log("El directorio fue renombrado.");
    }
})