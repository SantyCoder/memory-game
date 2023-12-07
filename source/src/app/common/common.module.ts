import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Global components
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { TimerComponent } from './timer/timer.component';
import { ValidateComponent } from './validate/validate.component';
@NgModule({
  declarations: [
    NotificationComponent,
    ModalComponent,
    TimerComponent,
    ValidateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NotificationComponent,
    ModalComponent,
    TimerComponent,
    ValidateComponent
  ]
})
export class CommonComponentsModule { }
