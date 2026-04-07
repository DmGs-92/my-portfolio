// Находим кнопку (приветсвие)
const helloButton = document.querySelector("#helloButton");

// Добавляем обработчик клика
helloButton.addEventListener("click", () => {
  alert("Привет, [ваше имя]!");
});

// Находим кнопку (подсветка)
const lightButton = document.querySelector("#lightButton");

// Находим все элементы списка навыков
const skillsItems = document.querySelectorAll(".skills-list__item");

// Добавляем обработчик подсветки навыков
lightButton.addEventListener("click", () => {
  // Перебираем каждый элемент списка по очереди
  skillsItems.forEach((item) => {
    item.classList.toggle("highlight");
  });
});

// Используем querySelector с символом # для поиска по ID
const subscribeForm = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#user-email");

// Добавляем обработчик на отправку формы
subscribeForm.addEventListener("submit", (event) => {
  // 1. Отменяем перезагрузку страницы
  event.preventDefault();
  // 2. Получаем значение из поля (пишем .value с маленькой буквы)
  const emailValue = emailInput.value;
  // 3. Вывод в консоль по твоему формату
  console.log(`Подписан: [${emailValue}]`);
  // 4. Показываем alert с благодарностью
  alert(`Спасибо за подписку, ${emailValue}`);
  // 5. Очищаем поле ввода
  subscribeForm.reset();
});

// Находим кнопку по ID
const btn = document.getElementById("fetch-quote-btn");
btn.addEventListener("click", loadQuote);

// Загружаем при старте
loadQuote();

async function loadQuote() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");

  quoteTextEl.textContent = "Загрузка...";
  quoteAuthorEl.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) throw new Error(`Ошибка ${response.status}`);
    const data = await response.json();

    quoteTextEl.textContent = `“${data.content}”`;
    quoteAuthorEl.textContent = `— ${data.author}`;
  } catch (error) {
    quoteTextEl.textContent = "Не удалось загрузить цитату. Попробуйте позже.";
    console.error("Ошибка запроса:", error);
  }
}
