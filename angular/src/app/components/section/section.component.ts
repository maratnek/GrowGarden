import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
  providers: [GalleryService]
})
export class SectionComponent implements OnInit {
	sortIndex: number;
	gallerys = [];
	clearFix: boolean;
	name: string;
	title: string;
	imgAnimate = true;
	price = 0;
	isSpecial = false;


  constructor(private photoS: GalleryService) { 
  	this.sortIndex = 0; 
    this.name = "./image/TomatGallery/tornadof1.jpg";
    this.price = 10;
    this.title = "Торнадо";

  	this.photoS.getGallery()	
        // .filter((gl: any) => gl.id < 25)
        .subscribe((res:any) => this.gallerys.push(res));

  }

  ngOnInit() {
		// this.name = this.gallerys[0].path + this.gallerys[0].urlTom;
		// this.price = this.gallerys[0].price;
  }

	showDivs(n) {
		this.imgAnimate = true;
		this.name = this.gallerys[n].path + this.gallerys[n].urlTom;
		this.price = this.gallerys[n].price;
		this.title = this.gallerys[n].title;
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
	}


}

interface Gallery {
	id: number;
	albumId: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}