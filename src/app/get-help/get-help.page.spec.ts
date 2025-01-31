import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetHelpPage } from './get-help.page';

describe('GetHelpPage', () => {
  let component: GetHelpPage;
  let fixture: ComponentFixture<GetHelpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
