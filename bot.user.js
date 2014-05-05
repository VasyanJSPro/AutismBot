// ==UserScript==
// @name   AutismBot 0.08 Alpha
// @namespace chatvdvoem
// @include  http://chatvdvoem.ru/
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @grant ПАШОЛ НАХУЙ СО СВОИМ ГРАНТ
// ==/UserScript==

// TO DO:
// Сделать работающие приветствия
// Сделать работающую паузу перед постом, желательно рандомную или даже по длине поста
// Расширить базу ответов 

// Всячина
//----------------------------------
function rand(n)
{
  m = 0;
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}
//----------------------------------
// Зайдем в чатец
//----------------------------------
function go_in(){
    var start_button = $("#chat_start");
    start_button.click();
}
//----------------------------------

// Массивы фраз
// для приветствия, приветствия не работают
var greetings_phrases = [ // 0 - 8 эл-тов
    "Привет!", "Здорово!", "Хай)",
    "Прива :)", "Hi!", "Сап", "привет",
    "здарова)", "хай"
];
// вот это приветствовалка, которая не работает
function choose_phrase(phrases_bank){
    return phrases_bank[rand(phrases_bank.length)];
}
function say(phrase){
    say_in = $("#text");
    accept_say = $("#text_send");
    say_in.val(phrase); // Что мы скажем
    // Жамкнем подтверждение, подождав 8 секунд
    setTimeout(function(){
      accept_say.click();  
    }, 5000);
    accept_say.click();
}

function get_last_answer(){
    //var messages_field = $("#messages");
    //var mess =  document.getElementsByClassName("messageFrom");
    
    return $(".messageFrom:last").text().replace("Некто ", "");
}


// это ебаное говно надо переделать очень даже, но у меня нет идей как
// поэтому в конце функции нагромождение костылей
function fun(str){
 	stroka = str;
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    // Собственно реплейсы
    stroka = stroka.replace("днище", "Вонзил в тебя я свой хуище");
    stroka = stroka.replace("Днище", "Вонзил в тебя я свой хуище");
    stroka = stroka.replace("ДНИЩЕ", "Вонзил в тебя я свой хуище");
    stroka = stroka.replace("сколько лет", "498");
    stroka = stroka.replace("пидора ответ", "хуидора хует");
    stroka = stroka.replace("Пидора ответ", "Хуидора хует");
    stroka = stroka.replace("НЕТ", "ПИДОРА ОТВЕТ");
    stroka = stroka.replace("Нет", "Пидора ответ");
    stroka = stroka.replace("нет", "пидора ответ");
    stroka = stroka.replace("привет", "пидора ответ");
    stroka = stroka.replace("не ", "");
    stroka = stroka.replace("НЕ ", "");
    stroka = stroka.replace("Привет", "Пидора ответ");
    stroka = stroka.replace("ПРИВЕТ", "ПИДОРА ОТВЕТ");
    stroka = stroka.replace("ты", "нет ты");
    stroka = stroka.replace("я м", " гей ");
    stroka = stroka.replace("я ж", " шлюха ");
    stroka = stroka.replace(" ты ", ", нет ты ");
    stroka = stroka.replace("тебя", "себя");
    stroka = stroka.replace("мой", "твой");
    stroka = stroka.replace("300", "сасай у тракториста");
    stroka = stroka.replace("что делаешь", "мамку твою ебу");
    stroka = stroka.replace(" тво", " нет тво");
    stroka = stroka.replace("Ты ", "Нет ты ");
    stroka = stroka.replace("ты ", "Нет ты ");
    stroka = stroka.replace("я ", "ты ");
    stroka = stroka.replace(" я ", " ты ");
    stroka = stroka.replace("Я ", "Ты ");
    stroka = stroka.replace("ж", " шлюха");
    stroka = stroka.replace("Девушк", "Шлюх");
    stroka = stroka.replace("девушк", "шлюх");
    stroka = stroka.replace("вирт", "сасай");
    stroka = stroka.replace("тест", "на хуе вертест");
    stroka = stroka.replace("лол", "вот ебучий пиздабол");
    stroka = stroka.replace("Лол", "Вот ебучий пиздабол");
    stroka = stroka.replace("ЛОЛ", "ВОТ ЕБУЧИЙ ПИЗДАБОЛ");
    stroka = stroka.replace("бля", "хуиля");
    stroka = stroka.replace("бот", "мамка твоя бот");
    stroka = stroka.replace("как звать", "рома");
    stroka = stroka.replace("Как зовут", "Я РОМА! ТЫ ХУЙ!");
    stroka = stroka.replace("минет", "ну пососи, мне не жалко");
    stroka = stroka.replace("анус", "гейдыра");
    stroka = stroka.replace("плагиат", "иди нахуй бля ");
    stroka = stroka.replace("ясно", "нихуя не ясно");
    stroka = stroka.replace("скрипт", "мамка твоя скрипт");
    stroka = stroka.replace("Сап", "Супчик");
    stroka = stroka.replace("сап", "супчик");
    stroka = stroka.replace("ты кто", "хуй в пальто");
    stroka = stroka.replace("Спасибо", "Пожалуйста");
    stroka = stroka.replace("спасибо", "пожалуйста");
    stroka = stroka.replace("ок", "сасай мой петушок");
    stroka = stroka.replace("дебил", "знаешь ты хуец мудил");
    stroka = stroka.replace("отвали", "на хуй могучий посмотри");
    stroka = stroka.replace("дура", " мамка твоя ");
    stroka = stroka.replace("хуй", "говна пожуй ");
    stroka = stroka.replace("сука", "мамка твоя");
    stroka = stroka.replace("как дела", "мамку твою ебу");
    stroka = stroka.replace("как дела", "мамку твою ебу");
    stroka = stroka.replace("хорошо", "плохо");
    stroka = stroka.replace("человек", "хуесос");
    stroka = stroka.replace("СУКА", "ТВОЯ МАМКА");
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    stroka = stroka.replace("!", "");
    stroka = stroka.replace(".", "");
    stroka = stroka.replace(",", "");
    stroka = stroka.replace("?", "");
    stroka = stroka.replace("ip", "127.0.0.1");
    // Пилим костылики! Пердолимся в сраку!
    stroka = stroka.replace("Нет нет Нет", "нет");
    stroka = stroka.replace("нет нет Нет", "нет");
    stroka = stroka.replace("Нет Нет", "нет");
    stroka = stroka.replace("гей осква", "гей-сити");
    stroka = stroka.replace("гей осквы", "гей-сити");
    stroka = stroka.replace("гей оскву", "гей-сити");
    stroka = stroka.replace("шлюхаоп", "гейдыр");
    stroka = stroka.replace("твоты", "мамки твоей ");
    stroka = stroka.replace("псасай мой петушок", "пососай моего петушк");
    stroka = stroka.replace("Псасай мой петушок", "Пососай моего петушк");
    stroka = stroka.replace("гей удак", "вот анальный ты чудак");
    stroka = stroka.replace("длты", "для");
    stroka = stroka.replace("БЛТы", "ХУИЛЯ");
    stroka = stroka.replace("гей енты", "тебя");
    stroka = stroka.replace("гей амку", "мамку");
    stroka = stroka.replace("шлюхае", "десу ");
    stroka = stroka.replace("себты", "себя");
    stroka = stroka.replace("нор гей альный", "анальный");
    stroka = stroka.replace("нор гей ально", "анально");
    stroka = stroka.replace("гей ать", "мать-хуять");
    stroka = stroka.replace("наговна ", "говна ");
    stroka = stroka.replace("ро гей а", "Рома");
    stroka = stroka.replace("Ро гей а", "Рома");
    stroka = stroka.replace("говнапожуй", "говна пожуй");
    stroka = stroka.replace("ромамка твоя бот", "мамка твоя робот");
    stroka = stroka.replace("нет говна пожуй  в пальто", "РОМА! Я - РОМА! ТЫ - ГОВНО!");
    stroka = stroka.replace("говна пожуй  в пальто", "хуй в пальто");
    stroka = stroka.replace("говна пожуй в пальто", "хуй в пальто");
    stroka = stroka.replace("нахуты", "нахуя");
    stroka = stroka.replace("есна хуе вертественн", "на хуе вертественн");
    stroka = stroka.replace("на говна пожуй", "говна пожуй");
    stroka = stroka.replace("говна пожуй мамка твоя", "на хуе только твоя мамка у меня крутится");
    stroka = stroka.replace("нет ты мамка твоя", "Только ты и мамка твоя");
    return stroka;
}

//---------------------------------------------------------
go_in();
//var delay = 5000;
//say("hi");
var old = "";
setInterval(function () { 

    		var rept = get_last_answer();
    			if(rept != old){
                    //alert(fun("Привет"));
    				say(fun(rept));
                    old = rept;
                }
			}, 500);


    //say(choose_phrase(greetings_phrases));
