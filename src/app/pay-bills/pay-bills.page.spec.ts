import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayBillsPage } from './pay-bills.page';

describe('PayBillsPage', () => {
  let component: PayBillsPage;
  let fixture: ComponentFixture<PayBillsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
