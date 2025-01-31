import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpiHomePage } from './upi-home.page';

describe('UpiHomePage', () => {
  let component: UpiHomePage;
  let fixture: ComponentFixture<UpiHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpiHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
