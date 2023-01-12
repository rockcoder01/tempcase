import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-to-octal',
  template: `
    <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">text to octal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'text'" [selectedOption]="'octal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>text Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" (keyup)="textToOctal()"
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
            <h2>octal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                     Text to octal Converter</mat-label>
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
        <h2><b>text to octal converter overview</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
        Converting a text string to an octal number (a base-8 numbering system) can be useful for various applications in computer science and programming. For example, octal numbers are commonly used to represent file permissions in Unix-based systems, and they can also be used to represent numbers in programming languages such as C and Python.
        </p>

        <p class="pragraph-font">
        There are several methods available for converting a text string to an octal number, including using programming language functions, online conversion tools, or manual calculations. In this blog post, we will focus on the fundamental principles behind the conversion process and how to perform it manually.
        </p>

        <p class="pragraph-font">
        To convert a text string to an octal number manually, you must first understand the place value of each digit in the string. In the base-8 numbering system, each digit in a number has a place value that represents a power of 8. For example, in the octal number 123, the 1 is in the 64's place and has a value of 64, the 2 is in the 8's place and has a value of 8, and the 3 is in the 1's place and has a value of 1.
        </p>

        <p class="pragraph-font">
        To convert a text string to an octal number, you must multiply each digit by its place value and add the resulting values together. For example, to convert the text string "123" to an octal number, you would multiply 1 by 64, 2 by 8, and 3 by 1, and then add the results together to get 83.
        </p>

        <p class="pragraph-font">
        To convert a text string to an octal number, you must multiply each digit by its place value and add the resulting values together. For example, to convert the text string "123" to an octal number, you would multiply 1 by 64, 2 by 8, and 3 by 1, and then add the results together to get 83.
        </p>

        <p class="pragraph-font">
        It's also important to understand the value of 0 in the base-8 numbering system. In this system, the value of 0 is important because it indicates the absence of a digit in a particular place value. For example, in the octal number 100, the 0 in the 8's place indicates that there is no digit in that place.
       </p>

       <p class="pragraph-font">
       There are several considerations to keep in mind when converting a text string to an octal number. First, it's important to ensure that the string is a valid representation of a number in the base-8 numbering system. This means that the string should only contain digits from 0 to 7, and it should not contain any characters or symbols that are not part of the base-8 numbering system.
       </p>

       <p class="pragraph-font">
       Another consideration is the format of the string. Depending on the format of the string, you may need to make adjustments to the place values of the digits or perform additional calculations to arrive at the final octal number. For example, if the string includes a decimal point, you will need to divide the value of the digits after the decimal point by the appropriate power of 8 to obtain the correct octal value.
       </p>
    </div>
  `,
  styleUrls: ['./text-to-octal.component.scss']
})
export class TextToOctalComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl(null)
  });

  textToOctal() {
    this.changeTextValue = this.formGroup.get('textValue')?.value ? parseInt(this.formGroup.get('textValue')?.value!, 8).toString() : ''
  }


  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }

}
