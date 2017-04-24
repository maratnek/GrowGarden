import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../../services/shop-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.sass']
})
export class ShopCartComponent implements OnInit {
	shopCartArray = [];

  constructor(private shopCartS: ShopCartService,
  	private router: Router) {
  	console.log(shopCartS.loadShopCartData());
  	shopCartS.loadShopCartData().forEach(
  		it => this.shopCartArray.push(it)
  		);
		// console.log(this.shopCartArray);
		this.shopCartArray.forEach(it => console.log(it));
		console.log(shopCartS.getSum());
  }

  ngOnInit() {
  }

  clearShoppingCart(){
  	this.shopCartS.clearShoppingCart();
  }
  isExistShCt(){
  	return localStorage.length != 0;
  }
  payShopping(){
  	console.log('pay-system');
  	this.router.navigate(['/pay-system']);
  }

}
