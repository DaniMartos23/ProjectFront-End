import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelsComponent } from './listhotels.component';

describe('ListhotelsComponent', () => {
  let component: ListHotelsComponent;
  let fixture: ComponentFixture<ListHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
