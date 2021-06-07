const fs = require("fs");
console.log("START");

fs.readFile("./f1.txt",function(err,data)
{
    console.log(data + " ");
})
fs.readFile("./f2.txt",function(err,data)
{
    console.log(data + " ");
})

fs.readFile("./f3.txt",function(err,data)
{
    console.log(data + " ");
})
//first START then end then koi bhi Async aa skta hai
//jiski async function k callback ki length km hogi wo pahle execute ho jaega

console.log("end");
