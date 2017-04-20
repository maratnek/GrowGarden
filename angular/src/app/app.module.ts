import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { routing } from './app.routing';
import { MainComponent } from './components/main/main.component';

import { GalleryService } from './services/gallery.service';
import { ShopCartService } from './services/shop-cart.service';
import { PaySystemComponent } from './components/pay-system/pay-system.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    ShopCartComponent,
    MainComponent,
    PaySystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [GalleryService, ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
