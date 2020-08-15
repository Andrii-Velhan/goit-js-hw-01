'use strict';

const countryName = prompt('Enter country Name:');

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

country =
  countryName[0].toUpperCase() + countryName.slice(1).toLocaleLowerCase(); // Write code on this line

message = `Доставка в ${country} будет стоить ${price} кредитов`;

console.log(message);
console.log(country);
