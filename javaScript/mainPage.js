
let tg = window.Telegram.WebApp;
let btn = document.getElementById("profile");

btn.addEventListener("click", () => {
  tg.close();
});