import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { ActivatedRoute } from '@angular/router'
import {
  upperCase, // `Title Case``
} from "text-case";
@Component({
  selector: 'app-lowercase-to-uppercase',
  templateUrl: './lowercase-to-uppercase.component.html',
  styleUrls: ['./lowercase-to-uppercase.component.scss']
})
export class LowercaseToUppercaseComponent implements OnInit {

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

 

  upperCase() {

    if (this.textValue) {
          this.changeTextValue =  this.textValue ? upperCase(this.textValue) : ''
      }
      this.formateType = 'upperCase'
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
