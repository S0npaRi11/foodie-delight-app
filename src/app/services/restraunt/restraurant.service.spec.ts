import { TestBed } from '@angular/core/testing';

import { RestraurantService } from './restraurant.service';

describe('RestraurantService', () => {
  let service: RestraurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestraurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
