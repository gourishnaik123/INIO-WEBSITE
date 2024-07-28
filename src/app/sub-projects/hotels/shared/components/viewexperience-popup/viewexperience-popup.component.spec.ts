import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexperiencePopupComponent } from './viewexperience-popup.component';

describe('ViewexperiencePopupComponent', () => {
  let component: ViewexperiencePopupComponent;
  let fixture: ComponentFixture<ViewexperiencePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewexperiencePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewexperiencePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
