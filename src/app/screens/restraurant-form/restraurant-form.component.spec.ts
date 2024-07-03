import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestraurantFormComponent } from './restraurant-form.component';

describe('RestraurantFormComponent', () => {
  let component: RestraurantFormComponent;
  let fixture: ComponentFixture<RestraurantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestraurantFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestraurantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
