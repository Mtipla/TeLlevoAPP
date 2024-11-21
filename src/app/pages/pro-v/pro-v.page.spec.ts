import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProVPage } from './pro-v.page';

describe('ProVPage', () => {
  let component: ProVPage;
  let fixture: ComponentFixture<ProVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
