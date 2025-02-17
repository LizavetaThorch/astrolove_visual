//тут даем ссылку на профиль второго юзера, если жмет да, заносим данные в таблицу мэтчей, что этот юзер ответил да
  function confirmYes() {
        document.getElementById("username").hidden=false
      document.getElementById("confirm").hidden=true
  }
   //если жмет нет, передаем данные в таблицу и окно уходит у обоих юзеров
  //если жмет нет, скрываем мэтч (удаляем его?)
  function confirmNo() {
    document.getElementById("confirm").hidden=true
};