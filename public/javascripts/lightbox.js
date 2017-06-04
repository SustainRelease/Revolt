var slideIndex = 1;
var slideCounter = 0;
var blocking = false;
showSlide(slideIndex);

setInterval(function () {
  if (!blocking) {
    slideCounter += 1;
    if (slideCounter >= 5) {
      plusSlides(1);
    }
  }
},1000);

function plusSlides(n) {
  if (!blocking) {
    showSlide(slideIndex + n);
  }
}

function showSlide(n) {
  blocking = true;
  var slides = document.getElementsByClassName("mySlides");
  var oldn = slideIndex;
  var opac = 0;
  if (n >= slides.length) {n = 0}
  if (n < 0) {n = slides.length - 1}
  slideIndex = n;
  //console.log("Old index: " + oldn);
  //console.log("New index: " + n);


  var animCount = 0;
  var countN = 50;
  var opacStart = 0.2;
  var id = setInterval(frame, 5);
  var fadeOut = true;
  function frame() {
    if (animCount == countN) {
      if (fadeOut) {
        slides[oldn].style.display = "none";
        slides[n].style.opacity = opacStart.toString();
        slides[n].style.display = "block";
        animCount = Math.ceil(countN*opacStart);
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
