import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincholloComponent } from './adminchollo.component';

describe('AdmincholloComponent', () => {
  let component: AdmincholloComponent;
  let fixture: ComponentFixture<AdmincholloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincholloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincholloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
