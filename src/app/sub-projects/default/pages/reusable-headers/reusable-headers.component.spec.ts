import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHeadersComponent } from './reusable-headers.component';

describe('ReusableHeadersComponent', () => {
  let component: ReusableHeadersComponent;
  let fixture: ComponentFixture<ReusableHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
