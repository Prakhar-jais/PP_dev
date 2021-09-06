let undo = document.querySelector("#undo");

undo.addEventListener("click",undoLine);

function undoLine(){
    if(linesDB.length){
        linesDB.pop();
        ctx.clearReact(0,0,canvas.clientWidth,canvas.height);
        drawLinesFromDB();
    }
}

function drawLinesFromDB(){
    for(let i=0;i<linesDB.length;i++)
    {
        let line = linesDB[i]
    }
}