import { TestBed } from '@angular/core/testing';

import { PhaseserviceService } from './phaseservice.service';

describe('PhaseserviceService', () => {
  let service: PhaseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhaseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
