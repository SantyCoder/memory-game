import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer, Observable, Subscription, interval } from 'rxjs';
// Model
import { Timer } from './timer.model';
// Service
import { TimerService } from './timer.service';

@Component({
  selector: 'game-timer',
  templateUrl: './timer.component.pug',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  public chronometer: Timer = {
    minutes: 0,
    seconds: 0
  };

  private time: Subscription = new Subscription();

  private manageTime: Observable<number> = interval(1000);

  @Output() timeSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _timer: TimerService
  ){}

  ngOnInit():void{
    //Esta suscrito al servicio para iniciar / detener el inicio del cronometro
    this._timer.startTime.subscribe((open:boolean)=>{
      open ? this.startTime() : this.stopTimer();
    });
  }

  /**
   * @description Inicia el cronometro del componente
   */
  startTime():void{
    this.time = this.manageTime.subscribe(()=> {
      this.updateTiempo();
    })
  }

  /**
   * @description Detiene el cronometro del componente
   */
  stopTimer():void{
    this.time.unsubscribe();
    // Reset chronometer
    if(this.chronometer.seconds !=  0 || this.chronometer.minutes != 0){
      this.timeSave.emit({minutes: this.chronometer.minutes, seconds: this.chronometer.seconds});
    }
    this.chronometer.seconds = 0;
    this.chronometer.minutes = 0;
  }

  /**
   * @description Actualiza los valores de segundos / minutos
   */
  updateTiempo() {
    this.chronometer.seconds++;
    if (this.chronometer.seconds === 60) {
      this.chronometer.seconds = 0;
      this.chronometer.minutes++;
    }
  }
}
