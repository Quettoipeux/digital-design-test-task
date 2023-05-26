const scrollBtn = document.querySelector('.arrow-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});