const fs=require("fs");
var v=fs.readFileSync("./temp.txt","utf-8");
fs.writeFileSync("./imade.txt","i made this file by fs");