import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-string-to-binary',
  templateUrl: './string-to-binary.component.html',
  styleUrls: ['./string-to-binary.component.scss']
})
export class StringToBinaryComponent {


  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  binaryToText() {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? this.binaryToHuman(this.formGroup.get('textValue')?.value!): ''
  }

  binaryToHuman(str:string) {
    // split string into an array so we can loop through it
    var newStr=str.split(" ");
    // declare a new array to later push "translated" values into
    var sArr:any=[];
    // loop through binary array, translate and push translated values into the new array
    newStr.forEach(function(item){
    sArr.push(String.fromCharCode(parseInt(item,2)));
    })

    // join the array back into a string
    return sArr.join("");
    }

  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }
}
