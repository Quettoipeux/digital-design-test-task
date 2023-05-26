// Получаем все кнопки "Купить" и форму для покупки товара
const buyBtns = document.querySelectorAll(".buy-btn");
const buyFormOverlay = document.querySelector(".buy-form-overlay");

// При клике на кнопку "Купить" открываем форму для покупки товара
buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    buyFormOverlay.style.display = "flex";
  });
});

// При клике на кнопку "Закрыть" закрываем форму для покупки товара
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  buyFormOverlay.style.display = "none";
});

// При отправке формы выводим сообщение о покупке
const buyForm = document.querySelector(".buy-form");
buyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantity = document.querySelector("#quantity").value;
  const color = document.querySelector('input[name="color"]:checked').value;

  alert(`Вы купили ${quantity} товаров цвета ${color}.\nСпасибо за покупку!`);

  buyFormOverlay.style.display = "none";
  buyForm.reset();
});