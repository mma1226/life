window.resizeTo(200, window.innerHeight);


const MIN_TOP = 100;
const MIN_LEFT = 100;

document.addEventListener("DOMContentLoaded", function() {
    // your JavaScript code here
 
  const gifPaths = [];

  for(let i =1; i<11; i++){
   const gifPath = "tv" + i + ".gif";
   gifPaths.push("gifs/" + gifPath);
  }
const gifContainer = document.getElementById("tvs");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
gifPaths.forEach(gifPath => {
  const img = document.createElement("img");
  img.src = gifPath;
  img.style.top = MIN_TOP + getRandomInt(20) * 1000 + "px";
  img.style.left = MIN_LEFT + getRandomInt(10) * 20  + "px";
  img.style.width = 200+  "px";

  gifContainer.appendChild(img);
});

const hoverElement = document.getElementById('remote');
const body = document.querySelector('body');

hoverElement.addEventListener('mouseover', () => {
  body.classList.add('hover');
});

hoverElement.addEventListener('mouseout', () => {
  body.classList.remove('hover');
});



});



