import { Injectable, computed, signal } from '@angular/core';
import { AppState, CounterState, TimerServiceInterface, initialCs, toggleCounterState } from './data';

@Injectable({
  providedIn: 'root'
})
export class TimerSignalService implements TimerServiceInterface {
  private sub?: ReturnType<typeof setInterval>;
  private sigNbTimeCounting = signal<number>(0)
  private sigCount          = signal<number>(0);
  private sigCs             = signal<CounterState>( initialCs );
  
  readonly state            = computed( () => {
    const cs = this.sigCs();
    return cs.type === "stopped" 
      ? {cs, nbTimeCounting: this.sigNbTimeCounting()}
      : {
        cs: {type: "counting", count: this.sigCount()},
        nbTimeCounting: this.sigNbTimeCounting()
      } satisfies AppState
  } );

  toggle(): void {
    this.sigCs.update( toggleCounterState );
    if (this.sigCs().type === "counting") {
      const incr   = (n: number) => n + 1;
      this.sigNbTimeCounting.update( incr );
      const incrSc = () => this.sigCount.update( incr )
      this.sub = setInterval( incrSc, 500 )
    } else {
      clearInterval( this.sub );
      this.sigCount.set(0);
    }
  }
  
}
