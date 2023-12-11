import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
// Service
import { ValidateService } from "./validate.service";
@Component({
  selector: 'game-validate',
  templateUrl: './validate.component.pug',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {

  public message: string = '';

  @Input() control: AbstractControl  = new FormControl();

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        this.message = ValidateService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        return this.message;
      }
    }
    return null
  }
}
