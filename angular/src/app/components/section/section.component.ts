import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
	sortIndex: number;

  constructor() { this.sortIndex = 1; }

  ngOnInit() {
  }

	showDivs(n) {
		console.log('show divs');
		let img = new Image();
	 //  var sort = $('.sort img');
	 //  if (n > sort.length) {this.sortIndex = 1}    
	 //  if (n < 1) {this.sortIndex = sort.length}
	 //  // sort.hide();
		// sort.eq(this.sortIndex).show();
	}

	plusDivs(n) {
	  this.showDivs(this.sortIndex += n);
	}


}
