import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Global components
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { TimerComponent } from './timer/timer.component';
@NgModule({
  declarations: [
    NotificationComponent,
    ModalComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationComponent,
    ModalComponent,
    TimerComponent
  ]
})
export class CommonComponentsModule { }
