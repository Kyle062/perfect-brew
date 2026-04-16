import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveAccountPage } from './leave-account.page';

describe('LeaveAccountPage', () => {
  let component: LeaveAccountPage;
  let fixture: ComponentFixture<LeaveAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
