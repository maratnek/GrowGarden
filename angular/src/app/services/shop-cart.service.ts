import { Injectable } from '@angular/core';

@Injectable()
export class ShopCartService {

  constructor() { 
  	console.log('Shop Cart Service ...');
  }

  addRassadaData(id, vid, count, price) {
  	console.log('Add data in localstorage ...');
  	localStorage.setItem(id, JSON.stringify({id, vid, count, price}));
  }

  loadShopCartData(){
  	let shCart = [];
  	for (var i=0,key,value; i < localStorage.length; i++) {
     // получаем имя ключа
     key = localStorage.key(i);
     // получаем значение по имени ключа
     value = localStorage.getItem(key);
     // выводим в консоль
     shCart.push(JSON.parse(value));
		}
  	return shCart;
  }

  getSum(){
  	let shCart = this.loadShopCartData();
  	let sum = shCart.reduce((sum,it) => {
  		console.log(it.count, it.price, sum);
  		return it.count * it.price + sum;
  	},0);
  	return sum;
  }

  clearShoppingCart(){
  	localStorage.clear();
  }

  clearShoppingCartId(){
  	localStorage.clear();
  }

}
