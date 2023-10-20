import { Component } from '@angular/core';
// Global handler service
import { ModalService } from './modal.service';
// Models
import { Modal } from './modal.model';
@Component({
  selector: 'game-modal',
  templateUrl: './modal.component.pug',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  modal: Modal = {
    type: '',
    icon: '',
    title: '',
    message: '',
    accept: '',
    cancel: '',
    handler: () => { }
  };

  status: string = '';

  executing: boolean = false;

  constructor(private modalService: ModalService) { }

  ngOnInit():void {
    this.modalService.currentAction.subscribe((response:Modal) => {
      if(response.message !== ''){
        this.status = 'show';
        this.modal = response;
      }
    });
    this.modalService.currentStatus.subscribe((response:any) => {
      this.executing = response.executing;
      this.status = response.status;
    });
  }

  close():void {
    this.status = '';
    this.modalService.hide();
  }

  execute():void {
    this.executing = true;
    this.modal.handler();
  }
}
