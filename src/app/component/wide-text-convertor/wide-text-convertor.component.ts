import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-wide-text-convertor',
  templateUrl: './wide-text-convertor.component.html',
  styleUrls: ['./wide-text-convertor.component.scss']
})
export class WideTextConvertorComponent implements OnInit {
  textValue: string = '';
  changeTextValue: string = '';
  options = {
    splitRegexp: /([a-z])([A-Z0-9])/g
  };
  copiedText = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSuccess(e: any) {
    this.copiedText = e.text;
  }

  changesWideText() {
    this.changeTextValue = this.textValue
  }

  onError(e: any) {
    this.copiedText = 'Error trying to copy your text';
  }

  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

}
