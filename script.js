/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
function showTooltip(event) {
    event.preventDefault();
    event.stopPropagation();
}

const videoEle = document.createElement("video");
videoEle.defaultMuted = false;
console.log(videoEle.outerHTML); // <video muted=""></video>