document.addEventListener("DOMContentLoaded",()=>{

const urlInput = document.getElementById("urlInput");
const platformText = document.getElementById("platformText");

const mediaType = document.getElementById("mediaType");
const videoQ = document.getElementById("videoQuality");
const audioQ = document.getElementById("audioQuality");
const photoQ = document.getElementById("photoQuality");

const sliderWrap = document.getElementById("aiSlider");
const slider = document.getElementById("qualitySlider");
const sliderVal = document.getElementById("qualityValue");

const detect = document.getElementById("detectBtn");
const progress = document.querySelector(".scan-progress");
const aiStatus = document.getElementById("aiStatus");

/* helpers */
const hideAll = ()=>{
  videoQ.classList.add("hidden");
  audioQ.classList.add("hidden");
  photoQ.classList.add("hidden");
  sliderWrap.classList.add("hidden");
};

const detectPlatform = (url)=>{
  if(url.includes("youtube")||url.includes("youtu.be")) return "YouTube detected";
  if(url.includes("tiktok")) return "TikTok detected";
  if(url.includes("instagram")) return "Instagram detected";
  return "Unknown platform";
};

/* slider */
sliderVal.innerText = slider.value + "%";
slider.addEventListener("input",()=>sliderVal.innerText = slider.value + "%");

/* detect */
detect.addEventListener("click",()=>{
  platformText.innerText = detectPlatform(urlInput.value);
  aiStatus.innerText = "Analyzing media…";
  progress.style.width="0%";
  setTimeout(()=>progress.style.width="100%",100);
  setTimeout(()=>aiStatus.innerText="Ready to download",1200);
});

/* smart switch */
mediaType.addEventListener("change",()=>{
  hideAll();
  if(mediaType.value==="video"){
    videoQ.classList.remove("hidden");
    sliderWrap.classList.remove("hidden");
    aiStatus.innerText="Optimizing video…";
  }
  if(mediaType.value==="audio"){
    audioQ.classList.remove("hidden");
    aiStatus.innerText="Optimizing audio…";
  }
  if(mediaType.value==="photo"){
    photoQ.classList.remove("hidden");
    aiStatus.innerText="Preparing image…";
  }
});

/* default */
hideAll();
videoQ.classList.remove("hidden");
sliderWrap.classList.remove("hidden");

});
