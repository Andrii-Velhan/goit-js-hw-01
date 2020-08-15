'use strict';

const userPassword = prompt('user Password');

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword !== ADMIN_PASSWORD) {
  message = ACCESS_DENIED;
}

console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

/*
        Задача 1-3
        Использование if else
        Напиши скрипт имитирующий авторизацию администратора в панели управления.

        Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

        const CANCELED_BY_USER = 'Отменено пользователем!'
        const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
        const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
        Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

        const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
        null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
        Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
        Используйте if else if else для написания скрипта.
        */

/*
        Значение переменной 'ADMIN_PASSWORD' должно быть равно 'jqueryismyjam'
        При значении userPassword = null значение переменной 'message' должно быть равно 'Отменено пользователем!'
        При значении userPassword = 'jqueryismyjam' значение переменной 'message' должно быть равно 'Добро пожаловать!'
        При значении userPassword = 'bla' значение переменной 'message' должно быть равно 'Доступ запрещен, неверный пароль!'
        При значении userPassword = '' значение переменной 'message' должно быть равно 'Доступ запрещен, неверный пароль!'
        Ожидается использование `if`
        Ожидается использование `else`
        */
