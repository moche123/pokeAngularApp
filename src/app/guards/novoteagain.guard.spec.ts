import { TestBed } from '@angular/core/testing';

import { NovoteagainGuard } from './novoteagain.guard';

describe('NovoteagainGuard', () => {
  let guard: NovoteagainGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NovoteagainGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
