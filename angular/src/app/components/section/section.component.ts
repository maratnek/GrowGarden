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
	}

	plusDivs(n) {
	  this.showDivs(this.sortIndex += n);
	}


}
