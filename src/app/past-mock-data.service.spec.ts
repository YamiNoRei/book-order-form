import { TestBed } from '@angular/core/testing';

import { PastMockDataService } from './past-mock-data.service';

describe('PastMockDataService', () => {
  let service: PastMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
