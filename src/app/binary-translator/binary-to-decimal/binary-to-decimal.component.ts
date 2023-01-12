import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-binary-to-decimal',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">binary to decimal converter</h1>
      <div class="row">
      <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'binary'" [selectedOption]="'decimal'"></app-binary-translator-filter>
      </div>
        <div class="col-md-6">
            <h2>binary Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" required pattern="[01]+" (keyup)="binaryToHexa()"
                    formControlName="textValue" name="textEnter" placeholder="Ex. 10101"></textarea>
                    <button *ngIf="textValue" matSuffix mat-icon-button aria-label="Clear" (click)="textValue=''">
                        <mat-icon>close</mat-icon>
                    </button>
                </mat-form-field>
                <div class="error-message" *ngIf="formGroup.get('textValue')?.invalid && formGroup.get('textValue')?.touched">
                    Please enter a valid binary string
                  </div>
            </form>
        </div>
        <div class="col-md-6">
            <h2>decimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                        binary to decimal Converter</mat-label>
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
        <h2><b>Binary to Decimal Converter Tool: Quickly and Accurately Convert Binary to Decimal</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Binary to decimal conversion is a common task in computer science and is often used to represent large numbers in a more compact form. In this blog post, we will look at an algorithm for converting binary numbers to decimal numbers and discuss the unique features and benefits of this conversion process.
        </p>

        <p class="pragraph-font">
        First, let's define what binary and decimal numbers are. Binary numbers are a base-2 numbering system, which means that they consist of only two digits: 0 and 1. These digits are often referred to as "bits" in the context of computer science. Decimal numbers, on the other hand, are a base-10 numbering system, which means that they consist of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        </p>

        <h3><b>Now that we have a basic understanding of binary and decimal numbers, let's look at the algorithm for converting binary numbers to decimal numbers. This algorithm involves the following steps:</b></h3>
        <ul>
            <li>Write the binary number in reverse order, with the least significant digit on the right.</li>
            <li>Multiply each digit by the corresponding power of 2, starting from 0 for the rightmost digit.</li>
            <li>
                <p class="mt-3 pragraph-font">
                   Add the results of the multiplications to get the final decimal number.
                </p>
                <p class="mt-3 pragraph-font">
                  <b> For example, let's say we want to convert the binary number "11010110" to its decimal equivalent. First, we write the number in reverse order: "01101011". Then, we multiply each digit by the corresponding power of 2, starting from 0 for the rightmost digit:
                  </b>
                </p>
                <ol>
                  <li class="pragraph-font">0 * 2^0 = 0</li>
                  <li class="pragraph-font">1 * 2^1 = 2</li>
                  <li class="pragraph-font">1 * 2^2 = 4</li>
                  <li class="pragraph-font">0 * 2^3 = 0</li>
                  <li class="pragraph-font">1 * 2^4 = 16</li>
                  <li class="pragraph-font">0 * 2^5 = 0</li>
                  <li class="pragraph-font">1 * 2^6 = 64</li>
                </ol>
                <p class="mt-3 pragraph-font">
                Finally, we add the results of the multiplications to get the final decimal number: 0 + 2 + 4 + 0 + 16 + 0 + 64 = 86.
                </p>
                <p class="mt-3 pragraph-font">
                As you can see, this algorithm is relatively simple and easy to implement, making it a useful tool for converting binary numbers to decimal numbers. It is also a useful tool for representing large numbers in a more compact form, as binary numbers are generally shorter and easier to read than their decimal counterparts.
                </p>
                <p class="mt-3 pragraph-font">
                In conclusion, binary to decimal conversion is a useful tool for representing large numbers in a more compact form and for working with numbers in computers and other digital devices. 
                </p>
            </li>
        </ul>
    <p class="pragraph-font">
       Are you working with binary numbers and need to convert them to decimal for further calculations? Our binary to decimal converter tool can help you do just that, quickly and accurately.
    </p>
    <p class="pragraph-font">
    But first, let's explain what binary is and why you might need to convert it to decimal. Binary, or base 2, is a numeral system that uses 2 digits (0 and 1) to represent numbers. It is commonly used in computer science and digital electronics because it is a convenient way to represent data using just two states (on and off, or 1 and 0).
    </p>
    <p class="pragraph-font">
      To convert binary to decimal, you can manually perform the calculations by multiplying each digit of the binary number by the corresponding power of 2 and summing the results. However, this can be time-consuming and prone to errors, especially for large numbers. That's where our binary to decimal converter tool comes in handy.
    </p>
    <p class="pragraph-font">
    To use our tool, simply enter the binary number in the input field and hit "Convert." The result will be displayed in the output field as a decimal number. You can also switch between binary and decimal by using the "Swap" button.
    </p>
    <p class="pragraph-font">
     So next time you need to convert binary to decimal, don't waste your time with manual calculations. Use our binary to decimal converter tool and get the accurate results you need in a fraction of the time. Try it out now!
    </p>
    </div>
  `,
  styleUrls: ['./binary-to-decimal.component.scss']
})
export class BinaryToDecimalComponent {

  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl('')
  });

  binaryToHexa() {
    const regex = /^[01]+$/;
    if (regex.test(this.formGroup.get('textValue')?.value!)) {
      this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 2).toString() : ''
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
