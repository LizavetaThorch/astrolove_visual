const tg = window.Telegram.WebApp;
let userData = {}; // Объект для хранения данных
//const userId = 898641850; // ID пользователя
const userId = -4770779801;

if (!userId) {
    console.error("Не удалось получить user_id. Убедитесь, что пользователь авторизован.");
}

console.log("user_id:", userId); // Проверка user_id


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
    "Найти друга (дружеские отношения)", "Найти подругу (дружеские отношения)", "Найти бизнес-партнера//коллегу ", "Найти врага", "Найти человека для путешествий", "Найти любовь всей жизни", "Построить отношения ", "Построить серьезные отношения", "Найти мужа", "Найти жену", "Найти парня ", "Найти девушку", "Подыскать полового партнера без обязательств (вам должно быть больше 18+)"
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
// Первая кнопка назад к вводу имени
document.getElementById("return").addEventListener("click",
    function back1() {
        document.getElementById("regist1").style.display = "block";
        document.getElementById("regist2").style.display = "none";
        document.getElementById("next").style.display = "block";
        document.getElementById("next1").style.display = "none";
        document.getElementById("rectangle2").style.display = "none";
        document.getElementById("return").style.display = "none";
      
   });
// Вторая кнопка назад к анкете
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
        const datebirth = document.getElementById("datebirth").value;
        const birthplace = document.getElementById("birthplace").value;
        const birthtime = document.getElementById("birthtime").value;
        const place = document.getElementById("place").value;
        const job = document.getElementById("job").value;
        const height = document.getElementById("height").value;
        const orientation = document.getElementById("orientation").value;
        const searching = document.getElementById("searching").value;
        const gapage = document.getElementById("gapage").value;
        const agegap = document.getElementById("agegap").value;
        const status = document.getElementById("status").value;
        const children = document.getElementById("children").value;
        const distance = document.getElementById("distance").value;
        const describe = document.getElementById("describe").value;
        const give = document.getElementById("give").value;
        const get = document.getElementById("get").value;
        const ideal = document.getElementById("ideal").value;

        // if (!name || !sex || !social || !datebirth || !birthplace || !place || !job || !orientation || !searching || !gapage || !agegap || !status || !children || !distance || !describe || !give || !get || !ideal) {
        //     alert("Заполните все поля!");
        //     return;
        // }

        userData = {
            name: name,
            sex: sex,
            social: social,
            datebirth: datebirth,
            birthplace: birthplace,
            birthtime: birthtime,
            place: place,
            job: job,
            height: height,
            orientation: orientation,
            searching: searching,
            gapage: gapage,
            agegap: agegap,
            status: status,
            children: children,
            distance: distance,
            describe: describe,
            give: give,
            get: get,
            ideal: ideal,
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
