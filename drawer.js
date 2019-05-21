const canvasTag = document.querySelector("canvas");

canvasTag.width = window.innerWidth * 2;
canvasTag.height = window.innerHeight * 2;

canvasTag.style.width = window.innerWidth + "px";
canvasTag.style.height = window.innerHeight + "px";

const context = canvasTag.getContext("2d");
context.scale(2, 2);

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;
const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png"
].map(src => {
  const image = document.createElement("img");
  image.src = src;
  return image;
});

document.addEventListener("mousemove", function() {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
});

canvasTag.addEventListener("click", function() {
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});

const draw = function() {
  if (currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - 70, currentY - 70, 140, 140);
    }

    currentX = currentX + (aimX - currentX) * 0.03;
    currentY = currentY + (aimY - currentY) * 0.03;
  }

  requestAnimationFrame(draw);
};

draw();
