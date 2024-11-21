import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajarPasajeroPage } from './viajar-pasajero.page';

describe('ViajarPasajeroPage', () => {
  let component: ViajarPasajeroPage;
  let fixture: ComponentFixture<ViajarPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajarPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
