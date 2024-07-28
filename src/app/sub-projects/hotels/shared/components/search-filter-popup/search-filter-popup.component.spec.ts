import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPopupComponent } from './search-filter-popup.component';

describe('SearchFilterPopupComponent', () => {
  let component: SearchFilterPopupComponent;
  let fixture: ComponentFixture<SearchFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
