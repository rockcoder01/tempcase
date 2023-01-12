import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hexadecimal-to-decimal',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">hexadecimal to decimal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'hexadecimal'" [selectedOption]="'decimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>hexadecimal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text"  pattern="^[a-fA-F0-9]+$" (keyup)="hexaToDecimal()"
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
            <h2>decimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                        hexadecimal to decimal Converter</mat-label>
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
        <h2><b>hexadecimal to decimal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Hexadecimal to decimal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this article, we will discuss the concept of hexadecimal to decimal conversion and provide a step-by-step guide for converting hexadecimal numbers to decimal numbers using basic mathematical principles.
        </p>

        <p class="pragraph-font">
        First, let's define what hexadecimal and decimal numbers are. Hexadecimal numbers are a base-16 numbering system, which means that they consist of 16 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. Decimal numbers are a base-10 numbering system, which means that they consist of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        </p>

        <h3><b>Hexadecimal to decimal conversion involves converting a hexadecimal number to its equivalent decimal number. This process can be accomplished by following these steps:</b></h3>
        <ol>
            <li class="pragraph-font">Break the hexadecimal number into its individual digits.</li>
            <li class="pragraph-font">For each digit, multiply it by the corresponding power of 16.</li>
            <li class="pragraph-font">Add up all of the products to get the decimal number.</li>

        </ol>
       <h3><b>For example, to convert the hexadecimal number AF to a decimal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Break the hexadecimal number into its individual digits: A and F</li>
            <li class="pragraph-font">For each digit, multiply it by the corresponding power of 16: A * 16^1 + F * 16^0 = 10 * 16 + 15 * 1 = 160 + 15 = 175</li>

        </ol>

        <p class="pragraph-font">
           The decimal number is 175.
        </p>

        <h3><b>Let's take another example. To convert the hexadecimal number 1F4 to a decimal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Break the hexadecimal number into its individual digits: 1, F, and 4</li>
            <li class="pragraph-font">For each digit, multiply it by the corresponding power of 16: 1 * 16^2 + F * 16^1 + 4 * 16^0 = 1 * 256 + 15 * 16 + 4 * 1 = 256 + 240 + 4 = 500</li>
        </ol>
        <p class="pragraph-font">
           The decimal number is 500.
           As you can see, hexadecimal to decimal conversion is a simple process that can be accomplished by breaking the hexadecimal number into its individual digits, multiplying each digit by the corresponding power of 16, and adding up all of the products. With a little bit of practice, you will be able to convert hexadecimal numbers to decimal numbers quickly and accurately.
        </p>
    </div>
  `,
  styleUrls: ['./hexadecimal-to-decimal.component.scss']
})
export class HexadecimalToDecimalComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  hexaToDecimal() {
    const regex = /^[a-fA-F0-9]+$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 16).toString() : ''
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
