import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { ShopCartService } from '../../services/shop-cart.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
  providers: []
})
export class SectionComponent implements OnInit {
	sortIndex: number;
	clearFix: boolean;
	imgPath: string;

	shCart: Gallery;
	gallerys = [];
	imgAnimate = true;
	isSpecial = false;
	rasCount = 1;


  constructor(private photoS: GalleryService,
  						private shopCartS: ShopCartService) 
  { 
  	this.shCart = <Gallery>{};
  	this.sortIndex = 0; 
    this.imgPath = "./image/TomatGallery/tornadof1.jpg";
    this.shCart.price = 10;
    this.shCart.title = "Торнадо";

  	this.photoS.getGallery()	
        .subscribe((res:any) => this.gallerys.push(res));

  }

  ngOnInit() {
  	console.log('Init Section Component');
  }

	showDivs(n) {
		this.imgAnimate = true;
		this.shCart = this.gallerys[n];
		this.imgPath = this.shCart.path + this.shCart.urlTom;
	}

	plusDivs(n) {
		this.imgAnimate = false;
		this.sortIndex += n;
	  if (this.sortIndex < 0)
	  	this.sortIndex = this.gallerys.length - 1;
	  else if (this.sortIndex >= this.gallerys.length)
	  	this.sortIndex = 0;
	  this.showDivs(this.sortIndex);
	}

	shopCartClick(){
		console.log('Shop Cart Click');
		this.isSpecial = true;
		this.shopCartS.addRassadaData(this.shCart.id, this.shCart.title, this.rasCount);


	}


}

interface Gallery {
	albumId: number;
	id: number;
	title: string;
	price: number;
	path: string;
	urlTom: string;
	urlRas: string;
}