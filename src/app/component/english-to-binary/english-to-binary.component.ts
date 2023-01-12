import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-english-to-binary',
  templateUrl: './english-to-binary.component.html',
  styleUrls: ['./english-to-binary.component.scss']
})
export class EnglishToBinaryComponent implements OnInit {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formateType: string = ''
  constructor() { }

  ngOnInit(): void {
  }

 

  stringTobinary() {
    this.changeTextValue = this.textValue.split('') // split in single chars
      .map(c => c.charCodeAt(0) // get the UTF-16 code (10 base)
        .toString(2)) // transform it back to a string (2 base)
      .join(' ') // make single string from array
      this.formateType = 'binary'
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
