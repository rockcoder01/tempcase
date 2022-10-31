import { Component, OnInit } from '@angular/core';
import {
  camelCase, // `camelCase`
  pascalCase, // `PascalCase`
  capitalCase, // `Capital Case`
  headerCase, // `Header-Case`
  titleCase, // `Title Case`
  pathCase, // `path/case`
  snakeCase, // `snake_case`
  paramCase, // `param-case`
  dotCase, // `dot.case`
  noCase, // `no case`
  constantCase, // `CONSTANT_CASE`
  lowerCase, // `lower case`
  lowerCaseFirst, // `lOWER CASE FIRST`
  upperCase, // `UPPER CASE`
  upperCaseFirst, // `Upper case first`
  swapCase, // `sWaP cAsE` -> `SwAp CaSe`
  sentenceCase,
} from "text-case";
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-text-caseconvert',
  templateUrl: './text-caseconvert.component.html',
  styleUrls: ['./text-caseconvert.component.scss']
})
export class TextCaseConvertComponent implements OnInit {

  textValue: string = '';
  changeTextValue: string = '';
  formateType:string = '';
  words = 0;
  sentences = 0;
  paragraphs = 0;

  options = {
    splitRegexp: /([a-z])([A-Z0-9])/g
  };
  copiedText = '';
  constructor(
  ) {
  
  }

  ngOnInit(): void {
  
  }

  upperCase(type: any) {

    if (this.textValue) {

      switch (type) {
        case "upperCase":
           this.textValue = this.textValue ? upperCase(this.textValue) : ''
          break;
        case "camelCase":
           this.textValue = this.textValue ? camelCase(this.textValue) : ''
          break;
        case "pascalCase":
           this.textValue = this.textValue ? pascalCase(this.textValue) : ''
          break;
        case "capitalCase":
           this.textValue = this.textValue ? capitalCase(this.textValue) : ''
          break;
        case "headerCase":
           this.textValue = this.textValue ? headerCase(this.textValue) : ''
          break;
        case "titleCase":
           this.textValue = this.textValue ? this.textValue.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()) : ''
          break;
        case "pathCase":
           this.textValue = this.textValue ? pathCase(this.textValue) : ''
          break;
        case "snakeCase":
           this.textValue = this.textValue ? snakeCase(this.textValue) : ''
          break;
        case "paramCase":
           this.textValue = this.textValue ? paramCase(this.textValue) : ''
          break;
        case "dotCase":
           this.textValue = this.textValue ? dotCase(this.textValue) : ''
          break;
        case "alternateCase":
           this.textValue = this.textValue ? this.alternateCase(this.textValue) : ''
          break;
        case "constantCase":
           this.textValue = this.textValue ? constantCase(this.textValue) : ''
          break;
        case "lowerCase":
           this.textValue = this.textValue ? lowerCase(this.textValue) : ''
          break;
        case "lowerCaseFirst":
           this.textValue = this.textValue ? lowerCaseFirst(this.textValue) : ''
          break;
        case "swapCase":
           this.textValue = this.textValue ? swapCase(this.textValue) : ''
          break;
        case "sentenceCase":
           this.textValue = this.textValue ? sentenceCase(this.textValue) : ''
          break;
        default:
          alert('Default case');
      }
      this.formateType = type
      setTimeout(()=>{
        this.formateType = ''
      }, 5000);
    }
  }

  modelChangeFn(value:string){
       this.words =  (this.textValue.length) ? this.textValue.split(/\s+/).length : 0;
       this.sentences = (this.textValue.length) ?  this.textValue.split(/[.?!][ "\n]/).length :0;
       this.paragraphs = (this.textValue.length) ?  this.textValue.split(/\n/).length :0;

  }

  createFile() {
    var blob = new Blob([this.textValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard(){
    navigator.clipboard.writeText(this.textValue).then().catch(e => console.error(e));
  }

  alternateCase(textsentence: String) {
    var chars = textsentence.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
  };


}
