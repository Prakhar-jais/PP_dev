const fs = require("fs");
let files = ["../f1.txt","../f2.txt","../f3.txt"];

for(let i = 0;i<files.length;i++)
{
    let filekaPromis = fs.promises.readFile(files[i]);
    filekaPromis.then(function(data)
    {
        console.log(data + " ");
    })
}

