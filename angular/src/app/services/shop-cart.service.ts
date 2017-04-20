import { Injectable } from '@angular/core';

@Injectable()
export class ShopCartService {

  constructor() { 
  	console.log('Shop Cart Service ...');
  }

  addRassadaData(id, vid, count) {
  	console.log('Add data in localstorage ...');
  	localStorage.setItem(id, JSON.stringify({id, vid, count}));
  	// localStorage.setItem('vid', JSON.stringify(vid));
  	// localStorage.setItem('count', count);
  }

  loadShopCartData(){
  	// const id = localStorage.getItem('id_vid');
  	// const vid = localStorage.getItem('vid');
  	// const count = localStorage.getItem('count');
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

  loggedIn(){
  	// return tokenNotExpired();
  }

  clearShoppingCart(){
  	localStorage.clear();
  }

}
