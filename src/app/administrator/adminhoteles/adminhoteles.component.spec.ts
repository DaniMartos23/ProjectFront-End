import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhotelesComponent } from './adminhoteles.component';

describe('AdminhotelesComponent', () => {
  let component: AdminhotelesComponent;
  let fixture: ComponentFixture<AdminhotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminhotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminhotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
