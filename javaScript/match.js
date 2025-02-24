const tg = window.Telegram.WebApp;
let userData = {}; // Объект для хранения данных
//const userId = 898641850; // ID пользователя
const userId = -4770779801;

if (!userId) {
    console.error("Не удалось получить user_id. Убедитесь, что пользователь авторизован.");
}

console.log("user_id:", userId); // Проверка user_id


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
