import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hext-to-binary',
  templateUrl: './hext-to-binary.component.html',
  styleUrls: ['./hext-to-binary.component.scss']
})
export class HextToBinaryComponent {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  hexaToBinary() {
    const regex = /^[a-fA-F0-9]+$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = (this.formGroup.get('textValue')?.value) ? parseInt(this.formGroup.get('textValue')?.value!,16)?.toString(2) : ''
    }

  }

  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }
}
