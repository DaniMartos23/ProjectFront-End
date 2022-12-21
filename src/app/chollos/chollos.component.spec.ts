import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChollosComponent } from './chollos.component';

describe('ChollosComponent', () => {
  let component: ChollosComponent;
  let fixture: ComponentFixture<ChollosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChollosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChollosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
