import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHotelsComponent } from './add-edit-hotels.component';

describe('AddEditHotelsComponent', () => {
  let component: AddEditHotelsComponent;
  let fixture: ComponentFixture<AddEditHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
