import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeHotelsComponent } from './seehotels.component';



describe('SeehotelsComponent', () => {
  let component: SeeHotelsComponent;
  let fixture: ComponentFixture<SeeHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
