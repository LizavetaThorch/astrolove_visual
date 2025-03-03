const tg = window.Telegram.WebApp;
let userData = {}; // Объект для хранения данных
//const userId = 898641850; // ID пользователя
const userId = -4770779801;

if (!userId) {
    console.error("Не удалось получить user_id. Убедитесь, что пользователь авторизован.");
}

console.log("user_id:", userId); // Проверка user_id


//перелистывание профиля

document.getElementById("payment").addEventListener("click",
    function tarif() {
        document.getElementById("prof1").style.display = "none";
        document.getElementById("prof2").style.display = "block";
    document.getElementById("changeprof").style.display = "none";
    });
 document.getElementById("profile").addEventListener("click",
    function prof() {
        document.getElementById("prof2").style.display = "none";
        document.getElementById("prof1").style.display = "block";
     document.getElementById("changeprof").style.display = "none";
    });
//это про мэтчи. если жмет да, тут даем ссылку на профиль второго юзера и заносим данные в таблицу мэтчей, что этот юзер ответил да
  function confirmYes() {
        document.getElementById("username").hidden=false
      document.getElementById("confirm").hidden=true
  }
   //если жмет нет, передаем данные в таблицу и окно уходит у обоих юзеров-как это?
  //если жмет нет, скрываем мэтч (удаляем его?)
  function confirmNo() {
    document.getElementById("confirm").hidden=true
      document.getElementById("continue").hidden=false
};
// Кнопка на редактирование анкеты
document.getElementById("change").addEventListener("click",
    function redact() {
        document.getElementById("prof1").style.display = "none";
        document.getElementById("changeprof").style.display = "block";
    });
// Заполнение списка с целью поисков для редактирования анкеты
const searchingsSelect = document.getElementById("searching");
const searchings = [
    "Найти друга (дружеские отношения)//Найти подругу (дружеские отношения)", "Найти бизнес-партнера//коллегу ", "Найти человека для путешествий", "Построить отношения ", "Найти мужа//Найти жену", "Найти парня//Найти девушку", "Подыскать полового партнера без обязательств (вам должно быть больше 18+)"
];
searchings.forEach((searching, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = searching;
    searchingsSelect.appendChild(option);
});

// Заполнение списка с целью поисков для редактирования анкеты
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("save").addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Кнопка Save нажата!");

        const searching = document.getElementById("searching").value;
        
         if (!searching ) {
             alert("Заполните все поля!");
             return;
         }
        
        userData = {
            searching: searching,
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