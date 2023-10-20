import { Component } from '@angular/core';
import { ModalService } from '../../common/modal/modal.service';
import { NotificationService } from '../../common/notification/notification.service';
//-Modal
@Component({
  selector: 'game-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _modal: ModalService,
    private _notify: NotificationService
  ){ }

  ngOnInit(){
    setTimeout(() => {
      /*this._modal.show({
        title: 'Inicio de sesión',
        message: 'El usuari ha iniciado sesón en tu computadora',
        type: 'success',
        icon: 'success',
        accept: 'Aceptar',
        cancel: 'Cerrar',
        handler: ()=> {
          console.log('click')
        }
      });*/
    }, 1000);
  }

  openNotify(){
    this._notify.show({
      title: 'Inicio de sesión',
      type: 'info',
      message: 'Mensaje de bienvenida al inicio de sesion'
    });
  }

}
