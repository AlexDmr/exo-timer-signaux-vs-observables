import { TestBed } from '@angular/core/testing';

import { TimerObservableRxjsService } from './timer-observable-rxjs.service';

describe('TimerObservableRxjsService', () => {
  let service: TimerObservableRxjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerObservableRxjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
