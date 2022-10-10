(function () {
  "use strict";
  const myImages = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg",
    "img/image5.jpg",
  ];
  let currentImg = 0;
  document.getElementById("next").onclick = nextPhoto;
  document.getElementById("previous").onclick = prePhoto;

  function nextPhoto() {
    currentImg++;
    if (currentImg > myImages.length - 1) {
      currentImg = 0;
    }
    document.getElementById("myimage").src = myImages[currentImg];
  }

  function prePhoto() {
    currentImg--;
    if (currentImg < 0) {
      currentImg = myImages.length - 1;
    }
    document.getElementById("myimage").src = myImages[currentImg];
  }
})();

// const myImages = [
//   "img/image1.jpg",
//   "img/image2.jpg",
//   "img/image3.jpg",
//   "img/image4.jpg",
//   "img/image5.jpg",
// ];
// let currentImg = 0;
// document.getElementById("next").onclick = nextPhoto;
// document.getElementById("previous").onclick = prePhoto;

// function nextPhoto() {
//   currentImg++;
//   if (currentImg > myImages.length - 1) {
//     currentImg = 0;
//   }
//   document.getElementById("myimage").src = myImages[currentImg];
// }

// function prePhoto() {
//   currentImg--;
//   if (currentImg < 0) {
//     currentImg = myImages.length - 1;
//   }
//   document.getElementById("myimage").src = myImages[currentImg];
// }
