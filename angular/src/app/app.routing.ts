import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { HeaderComponent } from './components/header/header.component';
// import { SectionComponent } from './components/section/section.component';
// import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
	{
		path: '',
		component: HeaderComponent	
	},
	{
		path: 'shop-cart',
		component: ShopCartComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

