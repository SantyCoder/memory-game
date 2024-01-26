import { Component } from '@angular/core';

@Component({
  selector: 'game-resume',
  templateUrl: './resume.component.pug',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  downloadPDF():void{
    const link = document.createElement('a');
    link.download = "cv-santiago-marcelino-flores.pdf";
    link.href = '/assets/document/CV-santiago-marcelino-flores.pdf';
    link.click();
    link.remove();
  }
}
