import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { MainComponent } from './components/main/main.component';
import { PaySystemComponent } from './components/pay-system/pay-system.component';


const appRoutes: Routes = [
	{
		path: '',
		component: MainComponent	
	},
	{
		path: 'shop-cart',
		component: ShopCartComponent
	},
	{
		path: 'pay-system',
		component: PaySystemComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

