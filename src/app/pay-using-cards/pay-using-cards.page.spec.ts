import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayUsingCardsPage } from './pay-using-cards.page';

describe('PayUsingCardsPage', () => {
  let component: PayUsingCardsPage;
  let fixture: ComponentFixture<PayUsingCardsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUsingCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
