import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-to-hexa',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">text to hexadecimal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'text'" [selectedOption]="'hexadecimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>text Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" (keyup)="textToHexaDecimal()"
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
            <h2>hexadecimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                    text to hexadecimal Converter</mat-label>
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
        <h2><b>text to hexadecimal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Hexadecimal numbers are a base-16 numbering system that uses the digits 0-9 and the letters A-F to represent numbers. They are commonly used in computer programming because they are shorter and more readable than binary numbers, which are the raw data that computers process.
        </p>

        <h3><b>If you want to convert English text to a hexadecimal number, here is a step-by-step guide to follow:</b></h3>
        <ul>
            <li class="pragraph-font">Encode the text string into a numerical representation using a suitable encoding scheme. The most common encoding scheme for English text is ASCII, which represents each character in the text string as a unique numerical value between 0 and 127.</li>
            <li class="pragraph-font"> Use a conversion function or method to convert the encoded numbers to a hexadecimal format. In JavaScript, you can use the Number object or the Buffer object to perform the conversion.</li>
            <li class="pragraph-font">
            To convert a hexadecimal number back to English text, you need to reverse the process by using a conversion function or method to convert the hexadecimal numbers back to their numerical representation, and then decode the numbers using the ASCII encoding scheme.</li>
        </ul>
        <p class="pragraph-font">
        It's important to note that the specific steps you need to follow to convert English text to hexadecimal numbers will depend on the programming language you are using and the tools and libraries available to you. However, the general principles outlined above should apply in most cases.
        </p>

        <p class="pragraph-font">
        So why is it useful to convert English text to hexadecimal numbers? One common use case is in web design, where hexadecimal numbers are often used to represent colors, fonts, and other visual elements. They are also used to store and manipulate data in computer programs, as well as for a variety of other purposes in the field of computer science.
        </p>

        <p class="pragraph-font">
        By understanding how to convert English text to hexadecimal numbers, you can make your work as a programmer more efficient and accurate, and unlock a wide range of possibilities for representing and manipulating data in your programs.
        </p>
    </div>
  `,
  styleUrls: ['./text-to-hexa.component.scss']
})
export class TextToHexaComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl(null)
  });

  textToHexaDecimal() {
    this.changeTextValue = this.formGroup.get('textValue')?.value ? this.toHex(this.formGroup.get('textValue')?.value!) : ''
  }

  toHex(txt: string) {
    const encoder = new TextEncoder();
    return Array
      .from(encoder.encode(txt))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  }
  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }


}
