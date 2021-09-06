let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100;
});

// canvas drawing gets erased on window resize ???

// a context object which provides fun for 2d drawing
let ctx = canvas.getContext("2d");

let ispendown = false;
let linesDB =[];
let lines=[];
let mousedown = canvas.addEventListener("mousedown",function(e){
    ispendown = true;
    let x = e.clientX;
    let y = e.clientY-100;  //ye minus 100 isliye kiya hai kyu ki wo toolbaar wala div k baad s start hona chahiye 
    ctx.beginPath();
    ctx.moveTo(x,y);

    let pointObject = {
        x:x,
        y:y,
        type:"md"
    }
    lines.push(pointObject);

})
let mousemove = canvas.addEventListener("mousemove",function(e){
    if(ispendown){
        let x = e.clientX;
        let y = e.clientY-100;
        ctx.lineTo(x,y);
        ctx.stroke();

        let pointObject = {
            x:x,
            y:y,
            type:"mm"
        }
        lines.push(pointObject);

    }

})
let mouseup = canvas.addEventListener("mouseup",function(e){
    ispendown = false ;
    linesDB.push(line);
    line = [];
    console.log(linesDB);

})
