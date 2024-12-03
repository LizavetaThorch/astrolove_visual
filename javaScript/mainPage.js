// Заполнение списка с днями (от 1 до 31)
const daysSelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daysSelect.appendChild(option);
}

// Заполнение списка с месяцами
const monthsSelect = document.getElementById("month");
const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = month;
    monthsSelect.appendChild(option);
});

// Заполнение списка с годами (от 2024 до 1924)
const yearsSelect = document.getElementById("year");
for (let year = 2024; year >= 1924; year--) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearsSelect.appendChild(option);
}

// Обработчик кнопки Save
//let tg = window.Telegram.WebApp; // Telegram API
let tg = Telegram.WebApp; // Telegram API
const saveButton = document.getElementById("next"); // ID кнопки Save (или Next)

tg.expand(); // Расширяем веб-приложение

saveButton.addEventListener("click", () => {
    // Получаем значения из полей
    const name = document.getElementById("name").value.trim();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const social = document.getElementById("social").value.trim();

    // Проверка, заполнены ли все поля
    if (!name || !day || !month || !year || !social) {
        alert("❌ Пожалуйста, заполните все поля!");
        return;
    }

    const dateOfBirth = `${day}.${month}.${year}`;

    const userData = {
        name,
        dateOfBirth,
        social
    };

    // Проверяем, доступен ли API Telegram Web App
    if (tg) {
        tg.sendData(JSON.stringify(userData));
        alert("✅ Данные успешно отправлены!");
    } else {
        alert("Ошибка: Telegram Web App не найден!");
    }
});
