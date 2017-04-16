import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
  providers: [GalleryService]
})
export class SectionComponent implements OnInit {
	sortIndex: number;
	gallerys: Gallery[];
	clearFix: boolean;


  constructor(private galleryS: GalleryService) { 
  	this.sortIndex = 1; 
  	console.log(this.galleryS.getGallery().subscribe(res=>{
  		console.log(res);
  		res.filter((id, i)=>{
  			if (i < 50){
  				return id;
  			}
  		})
  		this.gallerys = res;
  	}));
  }

  ngOnInit() {
  }

	showDivs(n) {
		console.log('show divs');
		let img = new Image();
	}

	plusDivs(n) {
	  this.showDivs(this.sortIndex += n);

	}


}

interface Gallery {
	id: number;
	title: string;
	body: string;
}