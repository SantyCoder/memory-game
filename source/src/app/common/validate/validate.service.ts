import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorRule?: any): string {
    let config: any = {
      'required': 'Campo requerido',
      'email': 'El formato de correo es inválido',
      'customEmail': 'El formato de correo es inválido',
      'minlength': `Debe contener mínimo ${validatorRule.requiredLength} carácteres`,
      'pattern': 'El campo no tiene un formato válido',
      'maxlength': 'Está excediendo el máximo número de caracteres permitidos',
      'equalTo': 'Los valores no coinciden',
      'whitespace': 'No se permiten espacios',
      'password': 'La contraseña debe incluir letras, números, caracteres especiales; mínimo 8 y máximo 15 caracteres',
      'empty': 'El campo no tiene contenido',
      'onlyNumbers': 'Sólo se permiten números',
      'onlyDecimals': 'Sólo se permiten decimales',
      'min': `El número no puede ser menor a ${validatorRule.min}`,
      'url': 'No es un URL válida'
    }
    return config[validatorName];
  }

  static onlyDecimals(control: AbstractControl): any {
    const flag = control['value'];
    if (flag !== null && flag['length'] !== undefined && flag['length'] > 0) {
      let value = control.value.toString();
      let isValid = value.match(/^\d+(\.\d{1,4})?$/);
      return isValid ? null : { 'onlyDecimals': true };
    }
  }

  static email(control: AbstractControl) {
    let isValid = control.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return isValid ? null : { 'customEmail': true };
  }

  static alphanumeric(control: AbstractControl) {
    let isValid = control.value.match(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/);
    return isValid ? null : { 'alphanumeric': true };
  }

  static url(control: AbstractControl) {
    let isValid = control.value.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
    return isValid ? null : { 'url': true };
  }

  static onlyNumbers(control: AbstractControl): any {
    const flag = control['value'];
    if (flag !== null && flag['length'] !== undefined && flag['length'] > 0) {
      let value = control.value.toString();
      let isValid = value.match(/^\d+$/);
      return isValid ? null : { 'onlyNumbers': true };
    }
  }

  static password(control: AbstractControl) {
    let isValid = control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&-_.])[A-Za-z\d@$!%*#?&-_.]{8,15}$/);
    return isValid ? null : { 'password': true };
  }
}
