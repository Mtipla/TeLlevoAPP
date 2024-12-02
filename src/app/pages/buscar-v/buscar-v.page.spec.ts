import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarVPage } from './buscar-v.page';

describe('BuscarVPage', () => {
  let component: BuscarVPage;
  let fixture: ComponentFixture<BuscarVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
