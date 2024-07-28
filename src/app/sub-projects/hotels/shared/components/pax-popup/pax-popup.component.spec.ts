import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxPopupComponent } from './pax-popup.component';

describe('PaxPopupComponent', () => {
  let component: PaxPopupComponent;
  let fixture: ComponentFixture<PaxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaxPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
