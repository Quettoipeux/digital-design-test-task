const scrollBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
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