/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WishesVolunteersComponent } from './wishes-volunteers.component';

describe('WishesVolunteersComponent', () => {
  let component: WishesVolunteersComponent;
  let fixture: ComponentFixture<WishesVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
