/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopCartService } from './shop-cart.service';

describe('ShopCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopCartService]
    });
  });

  it('should ...', inject([ShopCartService], (service: ShopCartService) => {
    expect(service).toBeTruthy();
  }));
});
