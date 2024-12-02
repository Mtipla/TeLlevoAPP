import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelarVPage } from './cancelar-v.page';

describe('CancelarVPage', () => {
  let component: CancelarVPage;
  let fixture: ComponentFixture<CancelarVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
