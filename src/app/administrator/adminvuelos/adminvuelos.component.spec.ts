import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvuelosComponent } from './adminvuelos.component';

describe('AdminvuelosComponent', () => {
  let component: AdminvuelosComponent;
  let fixture: ComponentFixture<AdminvuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminvuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminvuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
