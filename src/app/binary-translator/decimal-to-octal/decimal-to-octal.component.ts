import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-decimal-to-octal',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">decimal to octal converter</h1>
    <div class="row">
        <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'decimal'" [selectedOption]="'octal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>decimal Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text"  pattern="^[0-9]+(\.[0-9]+)?$" (keyup)="decimalToOctal()"
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
            <h2>octal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                         decimal to octal Converter</mat-label>
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
        <h2><b>decimal to octal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Decimal to octal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this article, we will discuss the concept of decimal to octal conversion and provide a step-by-step guide for converting decimal numbers to octal numbers using basic mathematical principles.
        </p>

        <p class="pragraph-font">
        First, let's define what decimal and octal numbers are. Decimal numbers are a base-10 numbering system, which means that they consist of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. Octal numbers are a base-8 numbering system, which means that they consist of 8 digits: 0, 1, 2, 3, 4, 5, 6, and 7.
        </p>

        <h3><b>Decimal to octal conversion involves converting a decimal number to its equivalent octal number. This process can be accomplished by following these steps:</b></h3>
        <ol>
            <li class="pragraph-font">Divide the decimal number by 8.</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the octal number.</li>
            <li class="pragraph-font">Divide the result of the division by 8.</li>
            <li class="pragraph-font">Repeat steps 2 and 3 until the result is 0.</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the octal number.</li>
        </ol>
       <h3><b>For example, to convert the decimal number 175 to an octal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Divide the decimal number by 8: 175 / 8 = 21 R 3</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the octal number: 3</li>
            <li class="pragraph-font">Divide the result of the division by 8: 21 / 8 = 2 R 5</li>
            <li class="pragraph-font">Divide the result of the division by 8: 2 / 8 = 0 R 2</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the octal number: 257</li>
        </ol>

        <p class="pragraph-font">
            The octal number is 257.
        </p>

        <h3><b>Let's take another example. To convert the decimal number 500 to an octal number, we can follow these steps:</b></h3>
       <ol>
            <li class="pragraph-font">Divide the decimal number by 8: 500 / 8 = 62 R 4</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the octal number: 4</li>
            <li class="pragraph-font">Divide the result of the division by 8: 62 / 8 = 7 R 6</li>
            <li class="pragraph-font">Write down the remainder as the next digit in the octal number: 6</li>
            <li class="pragraph-font">Divide the result of the division by 8: 7 / 8 = 0 R 7</li>
            <li class="pragraph-font">Write down the remainders in reverse order to get the octal number: 746</li>

        </ol>
        <p class="pragraph-font">
            The hexadecimal number is 1F4.
        </p>

        <p class="pragraph-font">
        As you can see, decimal to octal conversion is a simple process that involves dividing the decimal number by 8, writing down the remainder as the next digit in the octal number, and repeating this process until the result is 0. The remainders are then written down in reverse order to get the final octal number. With a little practice, you should be able to easily convert decimal numbers to octal numbers using this method.
        </p>
    </div>
  `,
  styleUrls: ['./decimal-to-octal.component.scss']
})
export class DecimalToOctalComponent  {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  decimalToOctal() {
    const regex = /^[0-9]+(\.[0-9]+)?$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!).toString(8) : ''
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
