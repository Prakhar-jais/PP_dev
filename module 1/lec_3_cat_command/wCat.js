const fs = require("fs");
let f1kadata=fs.readFileSync("./f1.txt","utf-8");
let f2kadata=fs.readFileSync("./f2.txt","utf-8");

function applySFlag(f1kadata)
{
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1kadata.split("\r\n");
    console.log(splittedData);

    for(let i=0;i<splittedData.length;i++)
    {
        if(splittedData[i] == "" && emptyIncluded == false)
        {
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;

        }
        else if(splittedData[i] != "")
        {
            removedSpaces.push(splittedData[i]);
            if(i<splittedData.length - 2 )
            {
                emptyIncluded = false;
            }
        }

         
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;

}
let removedSpacesString = applySFlag(f1kadata);
console.log(removedSpacesString);