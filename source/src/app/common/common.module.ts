import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Global components
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    NotificationComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationComponent,
    ModalComponent
  ]
})
export class CommonComponentsModule { }
