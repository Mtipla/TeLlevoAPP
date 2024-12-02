import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VViajePage } from './v-viaje.page';

describe('VViajePage', () => {
  let component: VViajePage;
  let fixture: ComponentFixture<VViajePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
