import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServiciosComponent } from './test-servicios.component';

describe('TestServiciosComponent', () => {
  let component: TestServiciosComponent;
  let fixture: ComponentFixture<TestServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
