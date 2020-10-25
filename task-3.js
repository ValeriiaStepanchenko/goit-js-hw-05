/*
использование методов класса

Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

Добавь методы класса:

getItems() - возвращает массив текущих товаров
addItem(item) - получает новый товар и добавляет его к текущим
removeItem(item) - получает товар и, если он есть, удаляет его из текущих
*/


class Storage { 
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items; //возвращает массив текущих товаров (наш goods)
     }
    addItem(item) {
        return this.items.push(item); //получает новый товар и добавляет его к текущим
     }
    removeItem(item) {    
        const index = this.items.indexOf(item);// 'Пролонгер'стоит под индексом 1
        if (index > -1) {
      return this.items.splice(index, 1); //Метод splice указывает с какого индекса начинать и сколько удалить (1)
    }
     }
}
  

console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */