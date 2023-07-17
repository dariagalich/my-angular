//типы переменных
//строка
var str = 'Hello Typescript';
// число
var num = 42;
// логическое
var bul = true;
// массив
var strArray = ['h', 'e', 'l'];
var numArray = [1, 2, 3];
//работа с функциями
//тип функции void-означает, что ф-я ничего не возвращает
function logInfo(name, age) {
    console.log("Info: ".concat(name, ",").concat(age));
}
//вызов ф-и
logInfo('Пример имени', 25);
function calc(a, b) {
    //если b строка, приводим значение к конвертиованному значению,
    //т.е. к числу
    if (typeof b === 'string')
        b = +b;
    return a + b;
}
//вызов ф-и
console.log(calc(2, 'f'));
