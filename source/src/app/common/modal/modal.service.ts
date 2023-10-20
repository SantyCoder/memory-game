import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Models
import { Modal } from './modal.model';
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _actionSource = new BehaviorSubject<Modal>({
    title: '',
    message: '',
    type: '',
    accept: 'Aceptar',
    handler: () => { }
  });

  currentAction = this._actionSource.asObservable();

  elementBody = document.getElementsByTagName('body')[0] as HTMLElement;

  statusAction = new BehaviorSubject<any>({ executing: false });

  currentStatus = this.statusAction.asObservable();

  classOpen: string = 'open-modal';

  show(modal: Modal){
    this.elementBody.classList.add(this.classOpen);
    this._actionSource.next(modal)
  }


  hide(className:string = ''){
    this.elementBody.classList.remove(this.classOpen);
    this.statusAction.next({executing: false, status: ''});
  }
}
