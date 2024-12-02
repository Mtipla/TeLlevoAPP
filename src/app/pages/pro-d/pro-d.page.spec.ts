import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProDPage } from './pro-d.page';

describe('ProDPage', () => {
  let component: ProDPage;
  let fixture: ComponentFixture<ProDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
