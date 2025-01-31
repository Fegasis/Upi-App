import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaytocontactPage } from './paytocontact.page';

describe('PaytocontactPage', () => {
  let component: PaytocontactPage;
  let fixture: ComponentFixture<PaytocontactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytocontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
