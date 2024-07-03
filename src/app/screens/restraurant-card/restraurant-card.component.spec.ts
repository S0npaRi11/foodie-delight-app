import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestraurantCardComponent } from './restraurant-card.component';

describe('RestraurantCardComponent', () => {
  let component: RestraurantCardComponent;
  let fixture: ComponentFixture<RestraurantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestraurantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestraurantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
