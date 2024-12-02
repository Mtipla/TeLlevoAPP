import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecpCPage } from './recp-c.page';

describe('RecpCPage', () => {
  let component: RecpCPage;
  let fixture: ComponentFixture<RecpCPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
