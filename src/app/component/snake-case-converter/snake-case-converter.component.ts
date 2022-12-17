import { Component } from '@angular/core';
import { saveAs } from 'file-saver'
import { ActivatedRoute } from '@angular/router'
import {
  snakeCase, // `Title Case``
} from "text-case";
@Component({
  selector: 'app-snake-case-converter',
  templateUrl: './snake-case-converter.component.html',
  styleUrls: ['./snake-case-converter.component.scss']
})
export class SnakeCaseConverterComponent {
  textValue: string = '';
  changeTextValue: string = '';
  formateType: string = '';
  currentRouter:string = ''
  words = 0;
  sentences = 0;
  paragraphs = 0;

  options = {
    splitRegexp: /([a-z])([A-Z0-9])/g
  };
  copiedText = '';

  constructor(private route: ActivatedRoute) {
    console.log('this routerr...snake-case-converter', this.route.snapshot.url[0]?.path);
    this.currentRouter = (this.route.snapshot.url[0]?.path)? this.route.snapshot.url[0]?.path : ''

  }

  ngOnInit(): void {
  }

 

  snakeCase() {

    if (this.textValue) {
          this.changeTextValue = this.textValue ? snakeCase(this.textValue) : ''
      }
      this.formateType = 'snakeCase'
      setTimeout(() => {
        this.formateType = ''
      }, 5000);
    }
  
  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }


}
