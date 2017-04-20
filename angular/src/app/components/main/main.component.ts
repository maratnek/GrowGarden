import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SectionComponent } from '../section/section.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
