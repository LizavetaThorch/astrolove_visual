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
let tg = window.Telegram.WebApp;
const saveButton = document.getElementById("next");

tg.expand();

saveButton.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const social = document.getElementById("social").value.trim();

    if (!name || !day || !month || !year || !social) {
        tg.showPopup({
            title: "Ошибка",
            message: "❌ Пожалуйста, заполните все поля!",
            buttons: [{ text: "ОК" }]
        });
        return;
    }

    const dateOfBirth = `${day}.${month}.${year}`;

    // Собираем данные в объект
    const userData = {
        name,
        dateOfBirth,
        social
    };

    if (tg) {
        tg.sendData(JSON.stringify(userData));

        tg.showPopup({
            title: "Успех",
            message: "✅ Данные успешно отправлены!",
            buttons: [{ text: "ОК" }]
        });
    } else { 
        alert("Ошибка: Telegram Web App не найден!");
    }
});
