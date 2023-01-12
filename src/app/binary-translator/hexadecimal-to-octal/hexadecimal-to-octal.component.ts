import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hexadecimal-to-octal',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">hexadecimal to octal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'hexadecimal'" [selectedOption]="'octal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>hexadecimal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text"  pattern="^[a-fA-F0-9]+$" (keyup)="hexaToOctal()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid hexadecimal string
                  </div>
            </form>
        </div>
        <div class="col-md-6">
            <h2>octal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                        hexadecimal to octal Converter</mat-label>
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
        <h2><b>hexadecimal to octal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Hexadecimal to octal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this article, we will discuss the concept of hexadecimal to octal conversion and provide a step-by-step guide for converting hexadecimal numbers to octal numbers using basic mathematical principles.
        </p>

        <p class="pragraph-font">
        First, let's define what hexadecimal and octal numbers are. Hexadecimal numbers are a base-16 numbering system, which means that they consist of 16 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. Octal numbers are a base-8 numbering system, which means that they consist of eight digits: 0, 1, 2, 3, 4, 5, 6, and 7.
        </p>

        <h3><b>Hexadecimal to octal conversion involves converting a hexadecimal number to its equivalent octal number. This process can be accomplished by following these fundamental rules:</b></h3>
        <ol>
            <li class="pragraph-font">Convert the hexadecimal number to a decimal number.</li>
            <li class="pragraph-font">Convert the decimal number to an octal number.</li>
        </ol>
       <h3><b>For example, to convert the hexadecimal number AF to an octal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Convert AF to a decimal number: AF = 10 * 16 + 15 = 175</li>
            <li class="pragraph-font">Convert the decimal number 175 to an octal number: 175 / 8 = 21 R 3; 21 / 8 = 2 R 5; 2 / 8 = 0 R 2. The remainders are 3, 5, and 2. If we write them in reverse order, we get the octal number 253.</li>

        </ol>

        <h3><b>Let's take another example. To convert the hexadecimal number 1F4 to an octal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Convert 1F4 to a decimal number: 1F4 = 1 * 16^3 + 15 * 16^2 + 4 * 16^1 = 500</li>
            <li class="pragraph-font">Convert the decimal number 500 to an octal number: 500 / 8 = 62 R 4; 62 / 8 = 7 R 6; 7 / 8 = 0 R 7. The remainders are 4, 6, and 7. If we write them in reverse order, we get the octal number 764.</li>
        </ol>
        <p class="pragraph-font">
        As you can see, hexadecimal to octal conversion is a two-step process that involves converting the hexadecimal number to a decimal number and then converting the decimal number to an octal number. With a little bit of practice, you will be able to convert hexadecimal numbers to octal numbers quickly and accurately.
        </p>
    </div>
  `,
  styleUrls: ['./hexadecimal-to-octal.component.scss']
})
export class HexadecimalToOctalComponent {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  hexaToOctal() {
    const regex = /^[a-fA-F0-9]+$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 16).toString(8) : ''
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
