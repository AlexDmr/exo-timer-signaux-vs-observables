import { Component } from '@angular/core';
import { TimerSignalService } from './timer-signal.service';
import { TimerObservableRxjsService } from './timer-observable-rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public timerSig: TimerSignalService,
    public timerObs: TimerObservableRxjsService
  ) {
  }
}
