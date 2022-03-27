import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-string-json-stringfy',
  templateUrl: './string-json-stringfy.component.html',
  styleUrls: ['./string-json-stringfy.component.scss']
})
export class StringJsonStringfyComponent implements OnInit {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formateType:string =''
  constructor() { }

  ngOnInit(): void {
  }

 
  stringTobinary() {
    this.changeTextValue = JSON.stringify(this.textValue)
    this.formateType = 'json Stringfy'
    setTimeout(()=>{
      this.formateType = ''
    }, 8000);
  }

  copyClipBoard(){
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }

  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }
}
