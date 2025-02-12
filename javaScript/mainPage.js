
// Заполнение списка с разницей в возрасте старше
const gapagesSelect = document.getElementById("gapage");
const gapages = [
    "Категорическое нет", "1-3 года", "4-7 лет", "8-11 лет", "12 и больше", "Не имеет значения"
];
gapages.forEach((gapage, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = gapage;
    gapagesSelect.appendChild(option);
});

// Заполнение списка с разницей в возрасте младше
const agegapsSelect = document.getElementById("agegap");
const agegaps = [
    "Категорическое нет", "1-3 года", "4-7 лет", "8-11 лет", "12 и больше", "Не имеет значения"
];
agegaps.forEach((agegap, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = agegap;
    agegapsSelect.appendChild(option);
});
// Заполнение списка со статусом отношений
const statussSelect = document.getElementById("status");
const statuss = [
    "В активном поиске", "Свободна/Свободен", "В отношениях", "Замужем/Женат", "Развод/В разводе"
];
statuss.forEach((status, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = status;
    statussSelect.appendChild(option);
});
// Заполнение списка про детей
const childrensSelect = document.getElementById("children");
const childrens = [
    "Дети имеются, хорошо к ним отношусь", "Дети есть, больше не хочу детей", "Детей нет, хорошо к ним отношусь", "Детей нет, не хочу детей"
];
childrens.forEach((children, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = children;
    childrensSelect.appendChild(option);
});
// Заполнение списка про отношения на расстоянии
const distancesSelect = document.getElementById("distance");
const distances = [
    "Да", "Нет ", "Не уверен(а)"
];
distances.forEach((distance, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = distance;
    distancesSelect.appendChild(option);
});

// Заполнение списка с ориентацией
const orientationsSelect = document.getElementById("orientation");
const orientations = [
    "Гетеросексуал", "Бисексуал", "Гей", "Лесбиянка"
];
orientations.forEach((orientation, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = orientation;
    orientationsSelect.appendChild(option);
});
// Заполнение списка с целью поисков
const searchingsSelect = document.getElementById("searching");
const searchings = [
    "Найти друга (дружеские отношения)", "Найти подругу (дружеские отношения)", "Найти бизнес-партнера//коллегу ", "Найти врага","Найти человека для путешествий", "Найти любовь всей жизни", "Построить отношения ", "Построить серьезные отношения","Найти мужа", "Найти жену", "Найти парня ", "Найти девушку","Подыскать полового партнера без обязательств (вам должно быть больше 18+)"
];
searchings.forEach((searching, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = searching;
    searchingsSelect.appendChild(option);
});
// Первая кнопка далее с открыванием анкеты
document.getElementById("next").addEventListener("click", 
    function regist() {
    document.getElementById("regist1").style.display="none";
    document.getElementById("regist2").style.display="block";
    document.getElementById("next").style.display="none";
    document.getElementById("next1").style.display="block";
    document.getElementById("rectangle2").style.display="block";
    
});
  // Вторая кнопка далее с открыванием оплаты
document.getElementById("next1").addEventListener("click", 
    function reg() {
    document.getElementById("regist2").style.display="none";
    document.getElementById("regist3").style.display="block";
    document.getElementById("rectangle3").style.display="block";
    
});
  

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("save").addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Кнопка Save нажата!");

        const name = document.getElementById("name").value;
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        const sex = document.getElementById("sex").value;
        const social = document.getElementById("social").value;

        if (!name || !day || !month || !year || !sex ||!social) {
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

        if (window.Telegram && window.Telegram.WebApp) {
            Telegram.WebApp.ready();
            console.log("Telegram WebApp инициализирован!");

            Telegram.WebApp.sendData(JSON.stringify(userData));
            console.log("Данные отправлены в бота!");
        } else {
            console.error("Telegram WebApp API не доступен!");
            alert("Telegram WebApp API не доступен!");
        }
    });
});


