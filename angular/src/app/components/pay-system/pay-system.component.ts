import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-pay-system',
  templateUrl: './pay-system.component.html',
  styleUrls: ['./pay-system.component.sass']
})
export class PaySystemComponent implements OnInit {

	moneyCheck = 0;

  constructor(private shCartS: ShopCartService) { 
  	this.moneyCheck = shCartS.getSum();
  }

  ngOnInit() {
  }

}
