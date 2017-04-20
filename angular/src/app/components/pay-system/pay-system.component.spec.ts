/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaySystemComponent } from './pay-system.component';

describe('PaySystemComponent', () => {
  let component: PaySystemComponent;
  let fixture: ComponentFixture<PaySystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
