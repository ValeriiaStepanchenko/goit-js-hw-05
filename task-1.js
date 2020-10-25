/*
function-constructor
Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

В prototype функции-конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

*/




 // Write code under this line
const Account = function(login, email){ //создаем ф-цию-конструктор и сэтим в нее свойства
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function(){
	return `login : ${this.login}, email: ${this.email}`; // вызываем строку
};


console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account( 'Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'