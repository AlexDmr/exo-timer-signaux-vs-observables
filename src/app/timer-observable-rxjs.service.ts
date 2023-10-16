import { Injectable, Signal } from '@angular/core';
import { AppState, TimerServiceInterface, initialState, toggleCounterState } from './data';
import { Subject, scan, startWith, switchMap, of, interval, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TimerObservableRxjsService implements TimerServiceInterface {
  private click = new Subject<void>();  
  
  readonly state: Signal<AppState> = toSignal( this.click.pipe(
    scan( ({cs, nbTimeCounting: n}) => ({cs: toggleCounterState(cs), nbTimeCounting: cs.type === "stopped" ? n + 1 : n})
        , initialState ),
    startWith( initialState ),
    switchMap( ({cs, nbTimeCounting}) => {
      if (cs.type === "stopped") return of({cs, nbTimeCounting});
      return interval(500).pipe(
        startWith(-1),
        map( i => ({
          cs: {...cs, count: i + 1},
          nbTimeCounting
        } satisfies AppState))
      )
    }),
  ), {requireSync: true} )

  toggle(): void {
    this.click.next()
  }
  
}
