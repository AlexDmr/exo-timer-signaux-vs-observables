import { TestBed } from '@angular/core/testing';

import { TimerSignalService } from './timer-signal.service';

describe('TimerSignalService', () => {
  let service: TimerSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
