const fs = require("fs");
const cheerio = require("cheerio");
let htmlKaData = fs.readFileSync("./index.html" , "utf8");

let mydocument = cheerio.load(htmlKaData);

let h1KaData = mydocument("h1").text();
console.log(h1KaData);
let pKaData = mydocument("p").text();
console.log(pKaData);
let table_Data = mydocument("table").text();
