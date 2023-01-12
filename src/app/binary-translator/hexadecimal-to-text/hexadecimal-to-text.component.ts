import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hexadecimal-to-text',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">hexadecimal to text converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'hexadecimal'" [selectedOption]="'text'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>hexadecimal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" (keyup)="hexaDecimalToText()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <!-- <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid binary string
                </div> -->
            </form>
        </div>
        <div class="col-md-6">
            <h2>Text Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                    hexadecimal to Text Converter</mat-label>
                    <textarea matInput rows="4" [(ngModel)]="changeTextValue" id="text-content-change" name="changetext"
                        ></textarea>
                </mat-form-field>
            </form>
            <button mat-flat-button class="mx-1 my-1" color="primary" (click)="copyClipBoard()">Copy clipboard</button>
            <button mat-flat-button (click)="createFile()" class="mx-1 my-1" color="primary">Create File</button>
        </div>
    </div>

    <hr>
    <div class="p-4">
        <h2><b>hexadecimal to text converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        The process of converting a hexadecimal number to an English text string involves using a specific coding scheme to map each hexadecimal number to a specific character or symbol. There are several coding schemes that are commonly used for this purpose, including ASCII (American Standard Code for Information Interchange), Unicode, and UTF-8 (Unicode Transformation Format - 8-bit).
        </p>

        <h3><b>Here are some fundamental rules to keep in mind when converting a hexadecimal number to an English text string:</b></h3>
        <ul>
            <li class="pragraph-font">Each character in an English text string is represented by a specific code point in the chosen coding scheme. For example, in ASCII, the code point for the character "A" is 65, the code point for the character "B" is 66, and so on.</li>
            <li class="pragraph-font">A code point is typically represented as a hexadecimal number, with each digit representing a specific bit in the code point. For example, in ASCII, each code point is represented by a 7-bit hexadecimal number.</li>
            <li class="pragraph-font">
               To convert a hexadecimal number to an English text string, you need to identify the code point for the character that you want to represent. You can do this by using a lookup table or a function that maps hexadecimal code points to characters in the chosen coding scheme.
            </li>
            <li class="pragraph-font">
               Once you have identified the code point for the character that you want to represent, you can use a function or method in your programming language to convert the code point to the corresponding character. In JavaScript, for example, you can use the String.fromCharCode() function to convert a decimal code point to a character in the ASCII character set.
            </li>
            <li class="pragraph-font">
            Some coding schemes, such as Unicode and UTF-8, use variable-length code points, which means that each code point may be represented by a different number of bits. In these cases, you may need to use additional rules or algorithms to correctly identify the code points for each character in the text string.
          </li>
          <li class="pragraph-font">
             To convert a hexadecimal number to a decimal number in JavaScript, you can use the parseInt() function. This function takes a hexadecimal number as an argument and converts it to a decimal number. You can then pass the decimal number to the String.fromCharCode() function to convert it to the corresponding character in the ASCII character set.
          </li>
        </ul>
    </div>
  `,
  styleUrls: ['./hexadecimal-to-text.component.scss']
})
export class HexadecimalToTextComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl(null)
  });

  hexaDecimalToText() {
    this.changeTextValue = this.formGroup.get('textValue')?.value ? String.fromCharCode(parseInt(this.formGroup.get('textValue')?.value!, 16)) : ''
  }


  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }
}
