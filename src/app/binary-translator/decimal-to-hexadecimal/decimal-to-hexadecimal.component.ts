import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-decimal-to-hexadecimal',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">decimal to hexadecimal converter</h1>
    <div class="row">
        <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'decimal'" [selectedOption]="'hexadecimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>decimal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text"  pattern="^[0-9]+(\.[0-9]+)?$" (keyup)="decimalToHexadecimal()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid decimal string
                  </div>
            </form>
        </div>
        <div class="col-md-6">
            <h2>hexadecimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                         decimal to hexadecimal Converter</mat-label>
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
        <h2><b>decimal to hexadecimal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Decimal to hexadecimal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this article, we will discuss the concept of decimal to hexadecimal conversion and provide a step-by-step guide for converting decimal numbers to hexadecimal numbers using basic mathematical principles.
        </p>

        <p class="pragraph-font">
        First, let's define what decimal and hexadecimal numbers are. Decimal numbers are a base-10 numbering system, which means that they consist of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. Hexadecimal numbers are a base-16 numbering system, which means that they consist of 16 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F.
        </p>

        <h3><b>Decimal to hexadecimal conversion involves converting a decimal number to its equivalent hexadecimal number. This process can be accomplished by following these steps:</b></h3>
        <ol>
            <li class="pragraph-font">Divide the decimal number by 16.</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the hexadecimal number.</li>
            <li class="pragraph-font">Divide the result of the division by 16.</li>
            <li class="pragraph-font">Repeat steps 2 and 3 until the result is 0.</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the hexadecimal number.</li>
        </ol>
       <h3><b>For example, to convert the decimal number 175 to a hexadecimal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Divide the decimal number by 16: 175 / 16 = 10 R 15</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the hexadecimal number: 15</li>
            <li class="pragraph-font">Divide the result of the division by 16: 10 / 16 = 0 R 10</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the hexadecimal number: AF</li>
        </ol>

        <p class="pragraph-font">
           The hexadecimal number is AF.
        </p>

        <h3><b>Let's take another example. To convert the decimal number 500 to a hexadecimal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Divide the decimal number by 16: 500 / 16 = 31 R 4</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the hexadecimal number: 4</li>
            <li class="pragraph-font">Divide the result of the division by 16: 31 / 16 = 1 R 15</li>
            <li class="pragraph-font">Divide the result of the division by 16: 1 / 16 = 0 R 1</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the hexadecimal number: 1F4</li>
      </ol>
        <p class="pragraph-font">
            The hexadecimal number is 1F4.
        </p>

        <p class="pragraph-font">
        As you can see, decimal to hexadecimal conversion is a simple process that involves dividing the decimal number by 16, writing down the remainder as the next digit in the hexadecimal number, and repeating this process until the result is 0. The remainders are then written down in reverse order to get the final hexadecimal number
        </p>
    </div>
  `,
  styleUrls: ['./decimal-to-hexadecimal.component.scss']
})
export class DecimalToHexadecimalComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  decimalToHexadecimal() {
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!).toString(16) : ''
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
