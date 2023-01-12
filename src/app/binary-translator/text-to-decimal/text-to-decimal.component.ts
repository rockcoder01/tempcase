import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-to-decimal',
  template: `
     <div class="container-fluid">
    <h1 class="mt-4 font-weight-bold">text to decimal converter</h1>
    <div class="row">
    <div class="col-md-12"><app-binary-translator-filter [selectedOption1]="'text'" [selectedOption]="'decimal'"></app-binary-translator-filter>
        </div>
        <div class="col-md-6">
            <h2>text Input</h2>
            <form class="example-form mt-1"  [formGroup]="formGroup">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Type or Paste Your Content Here</mat-label>
                    <textarea id="octal" matInput rows="4" type="text" (keyup)="textToDecimal()"
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
            <h2>decimal Output</h2>
            <form class="example-form mt-1">
                <mat-form-field class="example-full-width" appearance="fill">
                    <mat-label>Output
                    text to decimal Converter</mat-label>
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
        <h2><b>Text to Decimal Converter Tool: Quickly Convert Text to Decimal for Further Calculations</b></h2>
        <h3><b>Introduction:</b></h3>
        <p class="pragraph-font">
           Are you working with text data and need to convert it to decimal for further analysis or calculations? Our text to decimal converter tool can help you do just that, quickly and easily.
        </p>

        <p class="pragraph-font">
        But first, let's define what decimal is and why you might need to convert text to it. Decimal, or base 10, is the standard numeral system that we use in everyday life. It consists of 10 digits (0-9) and is used to represent numbers.</p>

        <p class="pragraph-font">
        Sometimes, text data may need to be converted to decimal in order to be used in certain calculations or analyses. This can be a time-consuming and error-prone process if done manually. That's where our text to decimal converter tool comes in. </p>

        <p class="pragraph-font">
        To use our tool, simply enter the text in the input field and hit "Convert." The result will be displayed in the output field as a decimal number. You can also switch between text and decimal by using the "Swap" button. </p>

        <p class="pragraph-font">
        There are several considerations to keep in mind when converting a text string to a decimal number. First, it's important to ensure that the string is a valid representation of a number in the base-10 numbering system. This means that the string should only contain digits from 0 to 9, and it should not contain any characters or symbols that are not part of the base-10 numbering system.        </p>
        <p class="pragraph-font">
        Not only is our text to decimal converter tool fast and reliable, but it is also SEO-friendly. We have included relevant keywords such as "text to decimal converter," "base 10," and "data analysis" to ensure that our tool can be easily discovered by search engines.
        </p>
        <p>
        So next time you need to convert text to decimal, don't waste your time with manual calculations. Use our text to decimal converter tool and get the accurate results you need in a fraction of the time. Try it out now!
        </p>
    </div>
  `,
  styleUrls: ['./text-to-decimal.component.scss']
})
export class TextToDecimalComponent {
  textValue: string = '';
  changeTextValue: string = '';
  copiedText = '';
  formGroup = new FormGroup({
    textValue: new FormControl(null)
  });

  textToDecimal() {
    this.changeTextValue = this.formGroup.get('textValue')?.value ? this.formGroup.get('textValue')?.value! : ''
  }


  createFile() {
    var blob = new Blob([this.changeTextValue], { type: 'text/plain;charset=utf-8' })
    saveAs(blob)
  }

  copyClipBoard() {
    navigator.clipboard.writeText(this.changeTextValue).then().catch(e => console.error(e));
  }

}
