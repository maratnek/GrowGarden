import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
	sFooter : string;

  constructor() { this.sFooter = 'Hello Im a footer';}

  ngOnInit() {
  }

}
