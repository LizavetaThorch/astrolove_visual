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


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next").addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Кнопка Save нажата!");

        const name = document.getElementById("name").value;
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const sex = document.getElementById("sex").value;
        const social = document.getElementById("social").value;

        if (!name || !day || !month || !year || !social) {
            alert("Заполните все поля!");
            return;
        }

        const userData = {
            name: name,
            birthday: `${day}.${month}.${year}`,
            sex: sex,
            social: social
        };

        console.log("Отправляем данные в бота: ", JSON.stringify(userData));

        if (window.Telegram.WebApp) {
            Telegram.WebApp.sendData(JSON.stringify(userData));
        } else {
            alert("Telegram WebApp API не доступен!");
        }
    });
});