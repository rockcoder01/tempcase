import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-binary-to-octal',
  templateUrl: './binary-to-octal.component.html',
  styleUrls: ['./binary-to-octal.component.scss']
})
export class BinaryToOctalComponent implements OnInit {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  ngOnInit(): void {
  }



  binaryToOctal() {
    const regex = /^[01]+$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 2).toString(8) : ''
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
