import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { MainComponent } from './components/main/main.component';


const appRoutes: Routes = [
	{
		path: '',
		component: MainComponent	
	},
	{
		path: 'shop-cart',
		component: ShopCartComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

