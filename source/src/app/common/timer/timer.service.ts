import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimerService {

  startTime: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * @description El servicio indica al componente que inicia el cronometro
   */
  startChronometro():void{
    this.startTime.next(true)
  }
  
  /**
   * @description El servicio indica al componente que se detiene el cronometro
   */
  stopChronometro():void{
    this.startTime.next(false)
  }

}
