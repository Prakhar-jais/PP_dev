let fs = require("fs");

let extensionsMapping=require("./util.js");
//console.log(extensionsMapping);
let testFolderPath = "./Downloads";
let allFiles = fs.readdirSync(testFolderPath);
//console.log(allFiles)
for(let i=0;i<allFiles.length;i++)
{
    sortFile(allFiles[i]);
}

function getExtension(file)
{
    file=file.split(".");
    return file[1];
}
function checkExtensionFolder(extension)
{
    let extensionFolderName = testFolderPath;
    for(let key in extensionsMapping)
    {
        let extensions = extensionsMapping[key];
        if(extensions.includes(extension))
        {
            extensionFolderName = extensionFolderName+"/"+key ;
            break ;

        }
    } 

    let isFolderExist = fs.existsSync(extensionFolderName);
    if(!isFolderExist)
    {
        fs.mkdirSync(extensionFolderName);
    }
    return extensionFolderName;
}

function moveFile(file,extensionFolderName)
{
    let sourceFile = testFolderPath+"/"+file;
    let destinationFile = extensionFolderName+"/"+file;

    //copy file source to desti...

    fs.copyFileSync(sourceFile,destinationFile);
    fs.unlinkSync(sourceFile);
}



function sortFile(file)
{
    let extension = getExtension(file);
    //console.log(extension)
    checkExtensionFolder(extension);
    let extensionFolderName = checkExtensionFolder(extension);
    moveFile(file,extensionFolderName);


}
