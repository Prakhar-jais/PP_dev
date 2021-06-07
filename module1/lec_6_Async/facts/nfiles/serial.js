let files = ["../f1.txt","../f2.txt","../f3.txt"];
const fs = require("fs");


fs.readFile(files[i],function(err,data)
{
    console.log(data+" ");
})
