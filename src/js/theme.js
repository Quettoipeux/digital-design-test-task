const themeSwitchBtn = document.querySelector('.theme-switch-btn');

const navbar = document.querySelector('.navbar');
const card = document.querySelectorAll('.card');
const modal = document.querySelector('.buy-form');
const footer = document.querySelector('.footer');

themeSwitchBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  navbar.classList.toggle('dark-theme');
  card.forEach(cardItem => {
    cardItem.classList.toggle('dark-theme');
  });
  modal.classList.toggle('dark-theme');
  footer.classList.toggle('dark-theme');
});