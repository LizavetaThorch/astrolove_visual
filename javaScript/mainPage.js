const tg = window.Telegram.WebApp;
let userData = {}; // Объект для хранения данных
//const userId = 898641850; // ID пользователя
const userId = -4770779801;

if (!userId) {
    console.error("Не удалось получить user_id. Убедитесь, что пользователь авторизован.");
}

console.log("user_id:", userId); // Проверка user_id


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
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
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

// Заполнение списка про выбор пола
const sexsSelect = document.getElementById("sex");
const sexs = [
    "Мужской", "Женский"
];
sexs.forEach((sex, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = sex;
    sexsSelect.appendChild(option);
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
    "Найти друга (дружеские отношения)//Найти подругу (дружеские отношения)", "Найти бизнес-партнера//коллегу ", "Найти человека для путешествий", "Построить отношения ", "Найти мужа//Найти жену", "Найти парня//Найти девушку", "Подыскать полового партнера без обязательств (вам должно быть больше 18+)"
];
searchings.forEach((searching, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = searching;
    searchingsSelect.appendChild(option);
});
// Заполнение списка с выбором знака зодиака
const signsSelect = document.getElementById("sign");
const signs = [
    "Овен", "Телец", "Близнецы", "Рак ", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог ", "Водолей", "Рыбы"
];
signs.forEach((sign, index) => {
    const option = document.createElement("option");
    option.value = index + 1;
    option.textContent = sign;
    signsSelect.appendChild(option);
});
// Первая кнопка далее с открыванием анкеты
document.getElementById("next").addEventListener("click",
    function regist() {
        document.getElementById("regist1").style.display = "none";
        document.getElementById("regist2").style.display = "block";
        document.getElementById("next").style.display = "none";
        document.getElementById("next1").style.display = "block";
        document.getElementById("rectangle2").style.display = "block";
        document.getElementById("return").style.display = "block";
    });
// Вторая кнопка далее с открыванием оплаты
document.getElementById("next1").addEventListener("click",
    function reg() {
        document.getElementById("regist2").style.display = "none";
        document.getElementById("regist3").style.display = "block";
        document.getElementById("rectangle3").style.display = "block";
        document.getElementById("return").style.display = "none";
        document.getElementById("return1").style.display = "block";
        document.getElementById("next1").style.display = "none";
    });
// Первая кнопка назад к вводу имени со страницы анкеты
document.getElementById("return").addEventListener("click",
    function back1() {
        document.getElementById("regist1").style.display = "block";
        document.getElementById("regist2").style.display = "none";
        document.getElementById("next").style.display = "block";
        document.getElementById("next1").style.display = "none";
        document.getElementById("rectangle2").style.display = "none";
        document.getElementById("return").style.display = "none";
      
   });
// Вторая кнопка назад к анкете со страницы оплаты
document.getElementById("return1").addEventListener("click",
    function back2() {
        document.getElementById("next1").style.display = "block";
        document.getElementById("regist2").style.display = "block";
        document.getElementById("regist3").style.display = "none";
        document.getElementById("rectangle2").style.display = "block";
        document.getElementById("rectangle3").style.display = "none";
        document.getElementById("return").style.display = "block";
        document.getElementById("return1").style.display = "none";
    });
 // Выбор что хотим предложить
var s = document.forms.Form2;
s.onchange = function () {
  var t = s.querySelectorAll('[type="checkbox"]'),
      g = s.querySelectorAll('[type="checkbox"]:checked');
  for (var m=0; m<t.length; m++)
    if (g.length >= 5) { // если отметить пять и более галочки
      t[m].disabled = true; // все чекбоксы становятся disabled
      for(var e=0; e<g.length; e++)
        g[e].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    } else {
      t[m].disabled = false; // если выделить менее пяти галочек, то disabled снимается со всех чекбоксов
    }
}

var f = document.forms.Form1;
f.onchange = function () {
  var n = f.querySelectorAll('[type="checkbox"]'),
      l = f.querySelectorAll('[type="checkbox"]:checked');
  for (var j=0; j<n.length; j++)
    if (l.length >= 5) { // если отметить пять и более галочки
      n[j].disabled = true; // все чекбоксы становятся disabled
      for(var i=0; i<l.length; i++)
        l[i].disabled = false; // но disabled убирается с помеченных галочками чекбоксов
    } else {
      n[j].disabled = false; // если выделить менее пяти галочек, то disabled снимается со всех чекбоксов
    }
}

// Функция выбора фото
document.getElementById("yourphoto").addEventListener("click", () => {
    const fileInput = document.getElementById("photoInput");

    // Открываем окно выбора файла
    fileInput.click();

    // Ждем выбора файла и загружаем его
    fileInput.onchange = async () => {
        if (fileInput.files.length > 0) {
            await uploadPhoto();
        }
    };
});


// Функция загрузки фото
async function uploadPhoto() {
    const fileInput = document.getElementById("photoInput").files[0];
    if (!fileInput) {
        alert("Выберите фото!");
        return;
    }

    const formData = new FormData();
    formData.append("photo", fileInput);
    formData.append("chat_id", userId);

    try {
        const response = await fetch(`https://api.telegram.org/bot7835102368:AAGjWAbwPn6bVVg5OC8X2O-UzD-dxdx_1h4/sendPhoto`, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        console.log("Ответ API Telegram:", result);

        if (result.ok && result.result.photo) {
            userData.photo_id = result.result.photo[result.result.photo.length - 1].file_id;
            console.log("file_id:", userData.photo_id);
        } else {
            console.error("Не удалось получить file_id. Ответ API:", result);
        }

    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("save").addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Кнопка Save нажата!");

        const name = document.getElementById("name").value;
        const sex = document.getElementById("sex").value;
        const social = document.getElementById("social").value;
        const sign = document.getElementById("sign").value;
        const month = document.getElementById("month").value;
        const day = document.getElementById("day").value;
        const year = document.getElementById("year").value;
        const birthplace = document.getElementById("birthplace").value;
        const birthtime = document.getElementById("birthtime").value;
        const place = document.getElementById("place").value;
        const orientation = document.getElementById("orientation").value;
        const searching = document.getElementById("searching").value;
        const gapage = document.getElementById("gapage").value;
        const agegap = document.getElementById("agegap").value;
        const status = document.getElementById("status").value;
        const distance = document.getElementById("distance").value;
        

         if (!name || !sex || !social ||  !sign || !day || !year || !month || !birthplace || !place  || !orientation || !searching || !gapage || !agegap || !status || !distance ) {
             alert("Заполните все поля!");
             return;
         }

        userData = {
            name: name,
            sex: sex,
            day: day,
            year:year,
            sign: sign,
            month: month,
            social: social,
            birthplace: birthplace,
            birthtime: birthtime,
            place: place,
            orientation: orientation,
            searching: searching,
            gapage: gapage,
            agegap: agegap,
            status: status,
            distance: distance,
            
            photo_id: userData.photo_id
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