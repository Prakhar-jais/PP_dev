let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".inner-record");
let recordingState = false;
let capturePhoto = document.querySelector(".inner-capture");
let mediaRecorder;
let filters = document.querySelectorAll(".filter");
let filterSelected = "none";

(async function () {
  let constraint = { video: true };
  let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
  //ids media stream ko video element k sc object m pass kr d
  videoElement.srcObject = mediaStream;
  //kb recording start krni hai webcam ki aur kha tk krni hai wo MediaRecorder se hoga
  mediaRecorder = new MediaRecorder(mediaStream, { mimeType: 'video/webm;codecs=vp8' });
  mediaRecorder.onstart = function () {
    console.log("Inside on start");
  }
  mediaRecorder.ondataavailable = function (e) {
    console.log("Inside on data available");
    console.log(e.data);
    let videoObject = new Blob([e.data], { type: "video/mp4" });


    console.log(videoObject);

    // videoObject/imageObject => URL
    // aTag
    //video download krenge url bna k aur uspe click 

    let videoURL = URL.createObjectURL(videoObject);
    let aTag = document.createElement("a");
    aTag.download = `Video${Date.now()}.mp4`;
    aTag.href = videoURL;
    aTag.click();

  }
  mediaRecorder.onstop = function () {
    console.log("Inside on stop");
  }

  recordButton.addEventListener("click", function () {
    if (recordingState) {
      // already recording is going on
      // stop the recording
      mediaRecorder.stop();
      recordButton.classList.remove("animate-record");
      recordingState = false;
    } else {
      // start the recording
      mediaRecorder.start();
      recordButton.classList.add("animate-record");
      recordingState = true;
    }
  });

  capturePhoto.addEventListener("click", function () {
    capturePhoto.classList.add("animate-capture");

    setTimeout(function () {
      capturePhoto.classList.remove("animate-capture");
    }, 1000);
    let canvas = document.createElement("canvas");
    canvas.height = 480;
    canvas.width = 640;

    let ctx = canvas.getContext('2d');

    if(currentZoom!=1){
      
      ctx.translate(canvas.width/2,canvas.height/2);
      ctx.scale(currentZoom,currentZoom);
      ctx.translate(-canvas.width/2,-canvas.height/2);

    }
            
    ctx.drawImage(videoElement, 0, 0);


    //filter lagane k liye photo clicked pr ye code hoga

    if (filterSelected != "none") {
      ctx.fillStyle = filterSelected;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    //image ko download krna hai ab
    let aTag = document.createElement("a");
    aTag.download = `Image${Date.now()}.jpg `;
    aTag.href = canvas.toDataURL("image/jpg");
    aTag.click();

  })
})();

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function (e) {

    let currentFilterSelected = e.target.style.backgroundColor;

    if (currentfilterSelected = "") {
      if (document.querySelector("filter-div")) {
        document.querySelector("filter-div").remove();
        filterSelected = "none";
        return;
      }
    }


    if (filterSelected == currentFilterSelected) {
      return;
    }




    let filterdiv = document.createElement("div");
    filterdiv.classList.add("filter-div");
    filterdiv.style.backgroundColor = currentFilterSelected;
    document.body.append(filterdiv);



    if (filterSelected == "none") {
      document.body.append(filterdiv);


    }

    else {
      document.querySelector(".filter-div").remove();
      document.body.append(filterdiv);



    }
    filterSelected = currentFilterSelected;


  })
}