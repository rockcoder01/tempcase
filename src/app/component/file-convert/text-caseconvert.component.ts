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
  options = {
    splitRegexp: /([a-z])([A-Z0-9])/g
  };
  copiedText = '';
  constructor(
  ) {
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
   }

  ngOnInit(): void {
  }

  upperCase(type:any) {

    if (this.textValue) {

      switch (type) {
        case "upperCase":
          this.changeTextValue = this.textValue ? upperCase(this.textValue) : ''
          break;
          case "camelCase":
            this.changeTextValue = this.textValue ? camelCase(this.textValue) : ''
            break;
            case "pascalCase":
              this.changeTextValue = this.textValue ? pascalCase(this.textValue) : ''
              break;
              case "capitalCase":
                this.changeTextValue = this.textValue ? capitalCase(this.textValue) : ''
                break;
                case "headerCase":
                  this.changeTextValue = this.textValue ? headerCase(this.textValue) : ''
                  break;
                  case "titleCase":
                    this.changeTextValue = this.textValue ? titleCase(this.textValue) : ''
                    break;
                    case "pathCase":
                      this.changeTextValue = this.textValue ? pathCase(this.textValue) : ''
                      break;
                      case "snakeCase":
                        this.changeTextValue = this.textValue ? snakeCase(this.textValue) : ''
                        break;
                        case "paramCase":
                          this.changeTextValue = this.textValue ? paramCase(this.textValue) : ''
                          break;
                          case "dotCase":
                            this.changeTextValue = this.textValue ? dotCase(this.textValue) : ''
                            break;
                            case "noCase":
                              this.changeTextValue = this.textValue ? noCase(this.textValue) : ''
                              break;
                              case "constantCase":
                                this.changeTextValue = this.textValue ? constantCase(this.textValue) : ''
                                break;
                                case "lowerCase":
                                  this.changeTextValue = this.textValue ? lowerCase(this.textValue) : ''
                                  break;
                                  case "lowerCaseFirst":
                                    this.changeTextValue = this.textValue ? lowerCaseFirst(this.textValue) : ''
                                    break;
                                    case "upperCaseFirst":
                                      this.changeTextValue = this.textValue ? upperCaseFirst(this.textValue) : ''
                                      break;
                                      case "swapCase":
                                        this.changeTextValue = this.textValue ? swapCase(this.textValue) : ''
                                        break;
                                        case "sentenceCase":
                                          this.changeTextValue = this.textValue ? sentenceCase(this.textValue) : ''
                                          break;
        default:
          alert('Default case');
      }
    


    }
    console.log('d', this.changeTextValue)
  }

  onSuccess(e:any) {
    this.copiedText = e.text;
  }

  onError(e:any) {
    this.copiedText = 'Error trying to copy your text';
  }
 
  createFile(){
    var blob = new Blob([this.changeTextValue],{type:'text/plain;charset=utf-8'})
    saveAs(blob)
  }
  
}
