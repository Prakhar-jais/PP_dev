let zoomIn = document.querySelector(".zoom-in");
let zoomOut = document.querySelector(".zoom-out");

let minZoom = 1;
let maxZoom = 3;
let currentZoom = 1;



zoomIn.addEventListener("click",function(){

    if(currentZoom+0.1 > maxZoom)
    {
        return ;
    }
    currentZoom += 0.1 ;
    videoElement.style.transform = `scale(${currentZoom})` ;

})

zoomOut.addEventListener("click",function(){
    if(currentZoom-0.1 < minZoom)
    {
        return ;
    }
    currentZoom -=0.1 ;

    videoElement.style.transform = `scale(${currentZoom})` ;

    
})

