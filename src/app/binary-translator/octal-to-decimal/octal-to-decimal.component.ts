import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-octal-to-decimal',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">octal to decimal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'octal'" [selectedOption]="'decimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>octal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" required pattern="[0-7]*" (keyup)="binaryToHexa()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid octal string
                  </div>
            </form>
        </div>
        <div class="col-md-6">
            <h2>decimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                        octal to decimal Converter</mat-label>
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
        <h2><b>octal to decimal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        octal to decimal converter is a common task in computer science and is often used to represent large numbers in a more compact form. In this overview, we will discuss the concept of octal to decimal conversion and the unique features and benefits of this process.
        </p>

        <p class="pragraph-font">
        First, let's define what octal to decimal numbers. Octal numbers are a base-8 numbering system, which means that they consist of eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Decimal numbers, on the other hand, are a base-10 numbering system, which means that they consist of ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        </p>

        <h3><b>Now that we have a basic understanding of octal to decimal numbers, let's look at the concept of octal to decimal converter. This process involves converting an octal number to its equivalent decimal number using the following formula:</b></h3>
        <ul>
            <li>Decimal = (8^0 * d0) + (8^1 * d1) + (8^2 * d2) + ... + (8^n * dn)</li>
        </ul>
    
        <p class="pragraph-font">
        In this formula, d0, d1, d2, ..., dn represent the digits in the octal number, starting from the rightmost digit. The exponent n represents the position of the digit in the octal number, starting from 0 for the rightmost digit.
        </p>
        <p class="pragraph-font">
         octal to decimal Example, let's say we want to convert the octal number "77" to its decimal equivalent. Using the formula above, we can calculate the decimal equivalent as follows:
        </p>
        <p class="pragraph-font">
            Decimal = (8^0 * 7) + (8^1 * 7)
        </p>
        <p class="pragraph-font">
           = (1 * 7) + (8 * 7)
        </p>
        <p class="pragraph-font">
           = 7 + 56
        </p>
        <p class="pragraph-font">
           = 63
        </p>
        <p class="pragraph-font">
           As you can see, octal to decimal conversion is a simple process that involves multiplying each digit in the octal number by the corresponding power of 8 and summing the results. This process is useful for representing large numbers in a more compact form, as octal numbers are generally shorter and easier to read than their decimal counterparts.
        </p>
        <p class="pragraph-font">
           One of the main advantages of octal numbers is that they are easy to work with in computers and other digital devices, as they can be represented using a combination of digits. This makes octal numbers a popular choice for storing and transmitting data in the digital world.
        </p>
        <p class="pragraph-font">
        In conclusion, octal to decimal converter is a useful tool for representing large numbers in a more compact form and for working with numbers in computers and other digital devices. 
        </p>
    </div>
  `,
  styleUrls: ['./octal-to-decimal.component.scss']
})
export class OctalToDecimalComponent {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  binaryToHexa() {
    const regex = /^[0-7]*$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 8).toString() : ''
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
