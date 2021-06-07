const fs = require("fs");

console.log("start");

async function callMe() {
  try {
    console.log("Hello World !!");
    console.log("I am inside async function !!");
    let f1KaPP = fs.promises.readFile("./f1.txt", "utf8");
    let f2KaPP = fs.promises.readFile("./f2.txt", "utf8");
    let bothFilesData = await Promise.all([f1KaPP, f2KaPP]);
    console.log(bothFilesData);
  } catch (error) {
      console.log(error);
  }
}
callMe();

console.log("end");