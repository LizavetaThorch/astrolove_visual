
let tg = window.Telegram.WebApp;
let btn = document.getElementById("profile");

btn.addEventListener("click", () => {
  if (tg.isExpanded) {
    tg.close();
  } else {
    tg.expand();
    setTimeout(() => tg.close(), 50);
  }
});