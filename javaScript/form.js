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