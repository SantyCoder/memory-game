import { Component } from '@angular/core';
import { ModalService } from '../../common/modal/modal.service';
import { NotificationService } from '../../common/notification/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateService } from '../../common/validate/validate.service';
//-Modal
@Component({
  selector: 'game-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public sending: boolean = false;

  public frmLogin: FormGroup = new FormGroup({});

  constructor(
    private _modal: ModalService,
    private _notify: NotificationService
  ){ }

  ngOnInit(){
    this.frmLogin = new FormGroup({
      email: new FormControl('', [Validators.required, ValidateService.email]),
      password: new FormControl('',[Validators.required])
    });
  }


  submit():void {
    this.sending = true;
    setTimeout(() => {
      this.openNotify();
      this.sending = false;
    }, 2000);
    console.log(this.frmLogin.value)
  }

  openNotify(){
    this._notify.show({
      title: 'Inicio de sesión',
      type: 'info',
      message: 'Bienvenida al inicio de sesion'
    });
  }

}
