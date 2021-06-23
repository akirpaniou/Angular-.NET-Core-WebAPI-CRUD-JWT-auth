import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwCouComponent } from './sw-cou.component';

describe('SwCouComponent', () => {
  let component: SwCouComponent;
  let fixture: ComponentFixture<SwCouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwCouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwCouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
