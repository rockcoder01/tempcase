import { Component } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-decimal-to-binary',
  templateUrl: './decimal-to-binary.component.html',
  styleUrls: ['./decimal-to-binary.component.scss']
})
export class DecimalToBinaryComponent {

 
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  decimalToBinary() {
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = (this.formGroup.get('textValue')?.value) ? parseInt(this.formGroup.get('textValue')?.value!)?.toString(2) : ''
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
