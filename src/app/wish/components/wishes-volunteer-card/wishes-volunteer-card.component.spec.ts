import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishesVolunteerCardComponent } from './wishes-volunteer-card.component';

describe('WishesVolunteerCardComponent', () => {
  let component: WishesVolunteerCardComponent;
  let fixture: ComponentFixture<WishesVolunteerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesVolunteerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesVolunteerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
