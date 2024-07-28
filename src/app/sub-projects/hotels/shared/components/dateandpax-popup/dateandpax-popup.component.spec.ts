import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateandpaxPopupComponent } from './dateandpax-popup.component';

describe('DateandpaxPopupComponent', () => {
  let component: DateandpaxPopupComponent;
  let fixture: ComponentFixture<DateandpaxPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateandpaxPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateandpaxPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
