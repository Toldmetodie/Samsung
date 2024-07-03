let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const slideCount = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
}

function updateSlide() {
  const slideWidth = slides[currentSlide].clientWidth;
  const offset = -slideWidth * currentSlide;
  document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000);