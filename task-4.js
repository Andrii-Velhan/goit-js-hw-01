'use strict';

const orderPieces = prompt('Enter number of units:');

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (balanceCredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (balanceCredit < 0) {
  message = ACCESS_DENIED;
}

console.log(message);
// console.log(totalPrice);
// console.log(balanceCredit);

/*
Значение переменной 'credits' должно быть равно '23580'
Значение переменной 'pricePerDroid' должно быть равно '3000'
При значении orderPieces = null значение переменной 'message' должно быть равно 'Отменено пользователем!'
При значении orderPieces = '1' значение переменной 'message' должно быть равно 'Вы купили 1 дроидов, на счету осталось 20580 кредитов'
При значении orderPieces = '0' значение переменной 'message' должно быть равно 'Вы купили 0 дроидов, на счету осталось 23580 кредитов'
При значении orderPieces = '7' значение переменной 'message' должно быть равно 'Вы купили 7 дроидов, на счету осталось 2580 кредитов'
При значении orderPieces = '8' значение переменной 'message' должно быть равно 'Недостаточно средств на счету!'
При значении orderPieces = '12' значение переменной 'message' должно быть равно 'Недостаточно средств на счету!'
Ожидается использование `if`
Ожидается использование `else`
*/

/*
Задача 1-4
Использование if else и арифметических операторов
Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

Переменная credits хранит количество средств - 23580 кредитов.

Единица товара (дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

Переменная orderPieces принимает значения null (отказ от покупок) и целое положительное число (количество единиц товара).

Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

const CANCELED_BY_USER = 'Отменено пользователем!'
Вы купили ${} дроидов, на счету осталось ${} кредитов
const ACCESS_DENIED = 'Недостаточно средств на счету!'
Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
А также используйте if else для выбора значений переменной message.
*/
