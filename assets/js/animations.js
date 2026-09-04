$(document).ready(function () {
  onLoadImages(0, 1, 2);
});
showScroll();
let viejo = 2;
let actual = 0;
let nuevo = 1;
function showScroll() {
  var html = document.getElementsByTagName("html")[0];
  var elementShow = document.getElementsByClassName("aparece");
  
  function checkVisible() {
    var topVent = html.scrollTop || window.scrollY;
    for (let i = 0; i < elementShow.length; i++) {
      var lopelemAparece = elementShow[i].offsetTop;
      if (topVent > lopelemAparece - 800) {
        elementShow[i].style.transitionDuration = "1s";
        elementShow[i].style.opacity = 1;
      }
    }
  }
  
  document.addEventListener("scroll", checkVisible);
  // Trigger immediately on load so the first section isn't blank
  setTimeout(checkVisible, 100);
}
$("#test1").on("click", function (event) {
  goToSection(event);
});
const goToSection = (event) => {
  event.preventDefault();
  var element = document.querySelector("#test");

  // scroll to element
  element.scrollIntoView();
  element.scroll;
};
const images = [
  "./assets/img/carrousel/full/1.png",
  "./assets/img/carrousel/full/2.png",
  "./assets/img/carrousel/full/3.png",
];
const imagesDiv = [
  "./assets/img/carrousel/div/1.png",
  "./assets/img/carrousel/div/2.png",
  "./assets/img/carrousel/div/3.png",
];
const imagesInit = [
  "./assets/img/carrousel/init/1.png",
  "./assets/img/carrousel/init/2.png",
  "./assets/img/carrousel/init/3.png",
];
function onLoadImages() {
  document.getElementById("img1").src = imagesDiv[viejo];
  document.getElementById("img2").src = images[actual];
  document.getElementById("img3").src = imagesInit[nuevo];
  document.getElementById("imgsm").src = images[actual];
  $("#numActual").html(actual + 1);

  $("#numTotal").html(`0${images.length}`);
}
function forwardImage() {
  viejo = viejo - 1 < 0 ? images.length - 1 : viejo - 1;
  actual = actual - 1 < 0 ? images.length - 1 : actual - 1;
  nuevo = nuevo - 1 < 0 ? images.length - 1 : nuevo - 1;
  onLoadImages();
}

function nextImage() {
  viejo = viejo + 1 >= images.length ? 0 : viejo + 1;
  actual = actual + 1 >= images.length ? 0 : actual + 1;
  nuevo = nuevo + 1 >= images.length ? 0 : nuevo + 1;
  onLoadImages();
}
