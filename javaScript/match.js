const tg = window.Telegram.WebApp;
let userData = {}; // Объект для хранения данных
//const userId = 898641850; // ID пользователя
const userId = -4770779801;

if (!userId) {
    console.error("Не удалось получить user_id. Убедитесь, что пользователь авторизован.");
}

console.log("user_id:", userId); // Проверка user_id


//если жмет да, тут даем ссылку на профиль второго юзера и заносим данные в таблицу мэтчей, что этот юзер ответил да
  function confirmYes() {
        document.getElementById("username").hidden=false
      document.getElementById("confirm").hidden=true
  }
   //если жмет нет, передаем данные в таблицу и окно уходит у обоих юзеров
  //если жмет нет, скрываем мэтч (удаляем его?)
  function confirmNo() {
    document.getElementById("confirm").hidden=true
      document.getElementById("continue").hidden=false
};