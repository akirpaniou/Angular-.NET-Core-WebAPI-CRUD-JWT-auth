import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCouComponent } from './add-edit-cou.component';

describe('AddEditCouComponent', () => {
  let component: AddEditCouComponent;
  let fixture: ComponentFixture<AddEditCouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
