let glowInTexts = document.querySelectorAll(".description");

glowInTexts.forEach(glowInText => {

  let letters = glowInText.textContent.split("");

  glowInText.textContent = "";

  letters.forEach((letter, i) => {

    let span = document.createElement("span");

    span.textContent = letter;

    span.style.animationDelay = `${i * 0.05}s`;

    glowInText.append(span);

  });

});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
