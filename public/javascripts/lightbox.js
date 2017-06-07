var slideIndex = 1;
var slideCounter = 0;
var blocking = true;
var uControl = false;


function lightInit() {
  var slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    if (i == slideIndex) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }
  uControl = true;
  blocking = false;
  slideCounter = 0;
}

lightInit();

setInterval(function () {
  if (!blocking) {
    slideCounter += 1;
    if (slideCounter >= 5) {
      showSlide(slideIndex + 1);
    }
  }
},1000);

function plusSlides(n) {
  if (uControl) {
    if (!blocking) {
      showSlide(slideIndex + n);
    }
  }
}

function showSlide(n) {
  blocking = true;
  var slides = document.getElementsByClassName("mySlides");

  var oldn = slideIndex;
  if (n >= slides.length) {n = 0}
  if (n < 0) {n = slides.length - 1}
  slideIndex = n;

  var animCount = 0;
  var countN = 50;
  var countUpStart = 10;
  var id = setInterval(frame, 5);
  var fadeOut = true;
  function frame() {
    if (animCount == countN + 1) {
      if (fadeOut) {
        slides[oldn].style.display = "none";
        slides[n].style.opacity = "0";
        slides[n].style.display = "block";
        animCount = countUpStart;
        fadeOut = false;
      } else {
        clearInterval(id);
        blocking = false;
        slideCounter = 0;
      }
    } else {
      if (fadeOut) {
        opac = 1-Math.sqrt(animCount/countN);
        slides[oldn].style.opacity = opac.toString();
        animCount += 1;
      } else {
        opac = Math.sqrt(animCount/countN);
        slides[n].style.opacity = opac.toString();
        animCount += 1;
      }
    }
  }
}
